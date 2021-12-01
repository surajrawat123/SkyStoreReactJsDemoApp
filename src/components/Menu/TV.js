import React from 'react'
import TvShows from '../Movies/TvShows'
import SliderImages from '../Slider/SliderImages'
import "./Menu.css"

const TV = () => {
    return (
        <div className="Menu">
            <SliderImages />
            <TvShows />
        </div>
    )
}

export default TV
