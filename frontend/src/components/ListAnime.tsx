import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ListAnime = () => {
  const [animeList, setAnimeList] = useState([])
  const [loading, setLoading] = useState(false)
    
  useEffect(() => {
      axios.get('https://anime-databases-apis.onrender.com/anime/listanime')
      .then((res) => {
          setAnimeList(res.data)
          setLoading(true)
      })
      .catch((err) => console.log(err))
      setLoading(true)
  }, [])

  return (
    <section className="w-3/4 text-white mt-5 mx-auto">
        <Link to={'../addAnime'} className="p-2 bg-teal-700 w-auto">New Anime</Link>
        {loading == false ? 
            <div>loading...</div>
            :
            (<table className="w-full text-left mt-5">
                <thead>
                    <tr className="bg-teal-900">
                        <th className="p-2">id</th>
                        <th className="p-2">Image</th>
                        <th className="p-2 text-nowrap">Anime Name</th>
                        <th className="p-2">Ratings</th>
                        <th className="p-2">Genre</th>
                        <th className="p-2">Author</th>
                        <th className="p-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                {animeList!.map((v: any, i: number) => {
                    return (
                        <tr key={i}  className="border-b-[1px] border-b-teal-900 p-3">
                            <td className="p-2">{i + 1}</td>
                            <td className="p-2">
                                <img src={`/uploads/${v.image}`} className="w-8 h-8" />
                            </td>
                            <td className="p-2">{v.anime_name}</td>
                            <td className="p-2">{v.ratings}</td>
                            <td className="p-2">{v.genre}</td>
                            <td className="p-2">{v.author}</td>
                            <td className="p-2">{v.description}</td>
                        </tr>
                    )
                })} 
                </tbody>
            </table>)
        }

    </section>
  )
}

export default ListAnime
