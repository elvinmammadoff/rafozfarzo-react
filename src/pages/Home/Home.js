import React from "react";
import HomeSlider from "./HomeSlider";
import { cardData } from '../../data/data';

const Home = () => {

    return (
        <HomeSlider data={cardData} />
    )
}

export default Home;