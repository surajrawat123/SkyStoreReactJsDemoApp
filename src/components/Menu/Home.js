import React from 'react'
import Movies from '../Movies/Movies'
import SliderImages from '../Slider/SliderImages'
import "./Menu.css"
const Home = () => {
    return (
        <div className="Menu">
            <SliderImages />
            <Movies />
        </div>
    )
}

export default Home
