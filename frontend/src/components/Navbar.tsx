import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <section className="w-screen flex items-center list-none gap-14 fixed"> 
        <nav className="flex items-center text-white gap-5 w-screen justify-evenly lg:h-16 px-8 py-3 bg-teal-900 flex-wrap">
            <h1 className="text-stroke font-bold text-2xl pb-1">AnimeDatabase</h1>
            <input type="search" name="" id="" className="w-96 p-2 rounded-sm bg-teal-700" placeholder="search"/>
            <ul className="flex justify-center items-center gap-6">
                <li><Link to='/' className="active:text-cyan-800">Home</Link></li>           
                <li><a href='#newAnime'>New Anime</a></li>          
                <li><a href='#mostWatch'>Most Watch</a></li>          
            </ul>
        </nav>
    </section>
  )
}

export default Navbar