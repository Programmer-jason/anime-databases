import { Link } from "react-router-dom"

const AdminNav = () => {
  return (
    <section className="w-screen">
        <h1 className="text-stroke font-bold text-2xl w-full bg-teal-900 p-3">AnimeDatabase</h1>

        <nav className="w-3/4 flex justify-center list-none gap-80 border-b-2 border-teal-900 text-white p-2 mt-5 mx-auto">
            <li><Link to='listAdmin' className="hover:text-teal-500">Admin</Link></li>           
            <li><Link to='listAnime' className="hover:text-teal-500">Anime</Link></li>           
        </nav>
    </section>
  )
}

export default AdminNav