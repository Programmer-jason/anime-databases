import axios from "axios"
import { memo, useEffect, useState } from "react"

function AnimeCards() {
    const [animeList, setAnimeList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:2000/anime/listanime')
        .then((res) => {
            setAnimeList(res.data)
            setLoading(true)
        })
        .catch((err) => console.log(err))
        setLoading(true)
    }, [])

    console.log('again')

    return (
        <section className="w-full">
            <div className="border-teal-900 border-y-2 text-white p-1 text-lg text-center mx-auto rounded-sm mt-4" id="mostView">Most View</div>
            {loading == false ?
                <div>loading...</div>
                    :
                (
                    <div className="flex w-3/4 gap-4 justify-center p-8 text-center flex-wrap mx-auto">

                        {animeList!.map((v: any, i: number) => {
                            return (
                                <div className="w-44 shadow-md bg-teal-900 rounded-sm text-white p-1" key={i}>
                                    <div className="h-10 bg-teal-900">{v.anime_name}</div>
                                    <img src={`../../uploads/${v.image}`} className="w-full h-44 object-fill" />
                                    <div>Ratings: {v.ratings}</div>
                                </div>
                            )
                        })} 
                    </div>
                )
            }
            <div className="border-teal-900 border-y-2 text-white p-1 text-lg text-center mx-auto rounded-sm mt-4" id="trending">Trending</div>
            {loading == false ?
                <div>loading...</div>
                :
                (
                    <div className="flex w-3/4 gap-4 justify-center p-8 text-center flex-wrap mx-auto">

                        {animeList!.map((v: any, i: number) => {
                            return (
                                <div className="w-44 shadow-md bg-teal-900 rounded-sm text-white p-1" key={i}>
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