import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import { settings } from "../../../data/data";

const HomeSlider = ({ data }) => {

    return (
        <Slider {...settings} className="slider">
            {data && data.length > 0 && data.map((card, index) => (
                <Card src={card.img} title={card.title} key={index} />
            ))}
        </Slider>
    )
}

export default HomeSlider;