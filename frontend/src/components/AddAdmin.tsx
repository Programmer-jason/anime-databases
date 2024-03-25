import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

type AdminType = {
    email: string,
    pass: string
}

const AddAdmin = () => {
    const navigate = useNavigate();
    const [addAdmin, setAddAdmin] = useState<AdminType>({
        email: '',
        pass: ''
    })

    function addInput(e: any){
        let name = e.target.name
        let value = e.target.value
        setAddAdmin(prev => ({ ...prev, [name]:value}))
    }

    function submitHandler(e: any){
        e.preventDefault();
        
        axios.post("http://localhost:2000/admin/addadmin" , {
          ...addAdmin
        })
        .then((res) => {
            console.log(res.data.message)
            navigate('/adminPage/listAdmin')
          
        })
        .catch((err) => {
            console.log(err)
            navigate('/adminPage/listAdmin')
        })
      }

  return (
    <section className="w-screen mt-10">
        <h2 className="bg-teal-900 p-5 w-1/3 mx-auto text-white">New Admin</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-3 border-2 border-teal-900 w-1/3 m-auto text-white rounded-sm overflow-hidden p-5">
            <input type="email" name="email" value={addAdmin.email || ''} id="email" className="w-full p-2 mx-auto h-10 rounded-sm bg-teal-900 outline-none" onChange={addInput}placeholder="Anime Name"/>
            <input type="password" name="pass" value={addAdmin.pass || ''} id="pass" onChange={addInput} className="w-full p-2 mx-auto h-10 rounded-sm bg-teal-900 outline-none" placeholder="Ratings"/>
            <input type="submit" value="Create" className="bg-teal-700 p-2 rounded-sm"/>
        </form>
    </section>
  )
}

export default AddAdmin