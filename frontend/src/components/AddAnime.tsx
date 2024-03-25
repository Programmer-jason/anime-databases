import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

type AnimeType = {
  image: any,
  anime_name: string,
  ratings: number,
  genre: string,
  author: string,
  description: string,
}

const AddAnime = () => {
  
  const navigate = useNavigate();
  const [file, setFile] = useState<string>('')
  const [input, setInput] = useState<AnimeType>({
    image: '',
    anime_name: '',
    ratings: 0.00,
    genre: '',
    author: '',
    description: '',
  })

  function addInput(e: any){
    let name = e.target.name
    let value = e.target.value
    setInput(prev => ({ ...prev, [name]:value}))
  }

  function fileUpload(e: any){
    setFile(e.target.files[0])
    setInput(prev => ({ ...prev, image:e.target.files[0].name}))
  }

  function submitHandler(e: any){
    e.preventDefault();
    
    const formData = new FormData()
    formData.append('file', file)
    
    axios.post("https://anime-databases-apis.onrender.com/anime/addanime", input)
    .then((res) => {
      console.log(res.data.message)
      navigate('/adminPage/listAnime')

    })
    .catch((err) => {
      console.log(err)
      navigate('/admin/ListAnime')
    })

    axios.post("https://anime-databases-apis.onrender.com/anime/uploads", formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    .then((res) => {
      console.log(res.data.message)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <section>
      <form onSubmit={submitHandler} className="flex flex-col gap-3 mt-10 border-2 border-teal-900 w-2/3 m-auto text-white rounded-sm overflow-hidden">
        <h2 className="bg-teal-900 p-4">New Anime</h2>
        <input type="file" name="file" onChange={fileUpload} className="w-3/4 p-2 mx-auto h-11 rounded-sm bg-teal-900" required/>
        <input type="text" name="anime_name" value={input.anime_name || ''} id="animeName" onChange={addInput} className="w-3/4 p-2 mx-auto h-10 rounded-sm bg-teal-900" placeholder="Anime Name"/>
        <input type="number" name="ratings" value={input.ratings} id="animeRatings" onChange={addInput} className="w-3/4 p-2 mx-auto h-10 rounded-sm bg-teal-900" placeholder="0.00"/>
        <input type="text" name="genre" value={input.genre || ''} id="animeGenre" onChange={addInput} className="w-3/4 p-2 mx-auto h-10 rounded-sm bg-teal-900" placeholder="genre"/>
        <input type="text" name="author" value={input.author || ''} id="author" onChange={addInput} className="w-3/4 p-2 mx-auto h-10 rounded-sm bg-teal-900" placeholder="Author"/>
        <textarea name="description" value={input.description || ''} id="description" onChange={addInput} className="w-3/4 p-2 mx-auto h-28 rounded-sm bg-teal-900" placeholder="Description"/>
        <input type="submit" value="Create" className="bg-teal-800 p-2"/>
      </form>
    </section>
  )
}

export default AddAnime
