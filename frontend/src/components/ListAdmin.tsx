import {useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const ListAdmin = () => {
    const [admin, setAdminList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://anime-databases-apis.onrender.com/admin/getAdmin')
        .then((res) => {
            setAdminList(res.data)
            setLoading(true)
        })
        .catch((err) => console.log(err))
        setLoading(true)
    }, [])

  return (
    <section className="w-3/4 list-none text-white mt-5 mx-auto">
        <Link to={'../addAdmin'} className="p-2 bg-teal-700 w-auto">New Admin</Link>
        {loading == false ? 
            <div>loading...</div>
            :
            (
                <table className="w-full text-left mt-5">
                    <thead>
                        <tr className="bg-teal-900">
                            <th className="p-2">Id</th>
                            <th className="p-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admin!.map((v: any, i: number) => {
                            return (
                                <tr key={i}  className="border-b-2 border-b-teal-900 p-3">
                                    <td className="p-2">{i + 1}</td>
                                    <td className="p-2">{v.email}</td>
                                </tr>
                            )
                        })} 
                    </tbody>
                </table>
            )
        }
    </section>
  )
}

export default ListAdmin
