import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <section className="w-screen flex items-center list-none gap-14 fixed"> 
        <nav className="flex items-center text-white gap-11 w-screen justify-between h-16 px-8 py-3 bg-teal-900">
            <ul className="flex justify-center items-center gap-6">
            <h1 className="text-stroke font-bold text-2xl pb-1">AnimeDatabase</h1>
                <li><Link to='/' className="active:text-cyan-800">Home</Link></li>           
                <li><a href='#trending'>Trending</a></li>          
                <li><a href='#mostView'>Most View</a></li>          
            </ul>
            <input type="search" name="" id="" className="w-80 p-2 rounded-sm" placeholder="search"/>
        </nav>
    </section>
  )
}

export default Navbar