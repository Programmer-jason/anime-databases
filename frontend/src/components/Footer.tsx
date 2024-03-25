import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return ( 
    <section className='flex flex-col items-center w-full h-28 bg-gray-900 text-white mt-40 p-10 justify-center gap-3'>

        {/* FOLLLOW US */}
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-lg">Followed Me</h2>
            <div className="flex gap-2">
                <FaFacebookSquare className="text-3xl"/>
                <FaInstagramSquare className="text-3xl"/>
                <FaTwitterSquare className="text-3xl"/>
            </div>
        </div>
                {/* COPYRIGHT */}
        <div className="w-full border-t-2 border-t-gray-800 text-center">
            <h2>&copy; Copyright 2024</h2>
        </div>
    </section>
  )
}

export default Footer