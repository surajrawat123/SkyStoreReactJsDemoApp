import React from 'react'
import Slider from 'react-slick';
import "./SliderImages.css"

const SliderImages = () => {

    const images = [
        { url: "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_FFE69A95-F20D-41C4-9C60-B1194E32A0FF_2021-10-27-T11-21-55.jpg?s=1440x580&t=bgmesh" },
        { url: "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_592BEA0E-E0B8-4337-B657-E7633FEC0C40_2021-11-12-T14-54-57.jpg?s=1440x580&t=bgmesh" },
        { url: "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_C0897B89-27BC-4203-A8F8-3C761605D237_2021-11-22-T10-5-9.jpg?s=1440x580&t=bgmesh" },
        { url: "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_45EDB016-52D0-4951-A5C1-99209C28C89B_2021-11-15-T9-10-38.jpg?s=1440x580&t=bgmesh" },
        { url: "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_46773696-89F9-4D21-A926-152068A84296_2021-11-29-T9-31-29.jpg?s=1440x580&t=bgmesh" },
        { url: "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_2EEAEC5C-5F8F-4FC3-9825-A302FD366B05_2021-11-29-T9-25-48.jpg?s=1440x580&t=bgmesh" },
        { url: "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_2F1DBE4F-3578-45EA-BE1C-DF909B38468E_2021-11-29-T9-27-42.jpg?s=1440x580&t=bgmesh" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        cssEase: "linear",
        appendDots:dots => {
            return <ul style={ { top:"70%" , marginRight:"16px" } } > {dots}</ul>
        }
    };
    return (
        <div className="slider-images">
            <Slider {...settings}>
                {images.map(ele => (
                    <div className="image-item">
                        <img src={ele.url} alt="images" className="image-movie" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderImages
