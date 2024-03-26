import axios from "axios"
import { memo, useEffect, useState } from "react"

function AnimeCards() {
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
        <section className="w-full">
            <div className="bg-teal-900 w-full text-white p-1 text-lg text-center mx-auto rounded-sm mt-4" id="mostWatch">Most Watch</div>
            {loading == false ?
                <div>loading...</div>
                    :
                (
                    <div className="flex justify-center lg:gap-4 lg:p-8 gap-2 p-2 text-center flex-wrap">

                        {animeList!.map((v: any, i: number) => {
                            return (
                                <div className="w-40 shadow-md bg-teal-900 rounded-md text-white p-1" key={i}>
                                    <div className="h-10 bg-teal-900">{v.anime_name}</div>
                                    <img src={`../../uploads/${v.image}`} className="w-full h-44 object-fill" />
                                    <div>Ratings: {v.ratings}</div>
                                </div>
                            )
                        })} 
                    </div>
                )
            }

            <div className="bg-teal-900 w-full text-white p-1 text-lg text-center mx-auto rounded-sm mt-4" id="newAnime">New Anime</div>
            {loading == false ?
                <div>loading...</div>
                    :
                (
                    <div className="flex justify-center lg:gap-4 lg:p-8 gap-2 p-2 text-center flex-wrap">

                        {animeList!.map((v: any, i: number) => {
                            return (
                                <div className="w-40 shadow-md bg-teal-900 rounded-md text-white p-1" key={i}>
                                    <div className="h-10 bg-teal-900">{v.anime_name}</div>
                                    <img src={`../../uploads/${v.image}`} className="w-full h-44 object-fill" />
                                    <div>Ratings: {v.ratings}</div>
                                </div>
                            )
                        })} 
                    </div>
                )
            }
        </section>
    )
}

export default memo(AnimeCards)
