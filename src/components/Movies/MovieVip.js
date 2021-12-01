import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import "./Movies.css"

const MovieVip = () => {
    const [data, setData] = useState([]);
    const [visible , setVisible] = useState(70);
    async function fetchApi() {
        const response = await axios("https://api.tvmaze.com/shows");
       
        setData(response.data);
        // const response = await fetch("https://api.tvmaze.com/shows");
        // const result = await response.json();
        // console.log(result);
        // setData(result);
    }
    useEffect(() => {
        fetchApi();
    }, [])
 

    return (
        <div className="heading">
            <h2>Sky Vip Welcome Gift</h2>
            <div className="movie">
                {data.slice(20,visible).map(element => (
                    <div className="movie-item">
                        <img src={element.image.medium} alt="Movie images" />
                        <p className="title"> {element.name} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieVip
