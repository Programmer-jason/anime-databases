import AnimeCards from "./components/AnimeCards"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <main className="w-screen bg-teal-950 h-screen overflow-auto text-sm">
        <Navbar />

        {/* BILLBOARD */}
        <section className="bg-gray-950 h-96"> 
            <img src="./assets/1334620.png" alt="" className="bg-neutral-800 h-full w-screen object-cover"/>
        </section>

        {/* LIST ANIME */}
        <AnimeCards />

        <Footer />
    </main>

  )
}

export default App
