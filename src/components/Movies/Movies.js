import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import "./Movies.css"

const Movies = () => {
    const [data, setData] = useState([]);
    const [visible , setVisible] = useState(28);
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
    function showMoreItem(){
        setVisible((value) => value+28);
    }

    return (
        <div className="heading">
            <h2>Latest Movies & TV </h2>
            <div className="movie">
                {data.slice(0,visible).map(element => (
                    <div className="movie-item">
                        <img src={element.image.medium} alt="Movie images" />
                        <p className="title"> {element.name} </p>
                    </div>
                ))}
            </div>
            <button onClick={showMoreItem} className="show-more">Show More</button>
        </div>
    )
}

export default Movies
