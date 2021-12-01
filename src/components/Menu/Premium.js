import React from 'react'
import MoviePremium from '../Movies/MoviePremium'
import SliderImages from '../Slider/SliderImages'
import "./Menu.css"
const Premium = () => {
    return (
        <div className="Menu">
            <SliderImages/>
            <MoviePremium />
        </div>
    )
}

export default Premium
