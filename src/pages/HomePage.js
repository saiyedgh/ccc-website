import React from 'react';

import Carousel from '../components/Carousel';
import SquadSlider from '../components/SquadSlider';
import Data from '../components/CarouselImgData';
import Squad from '../components/SquadNames';

const HomePage = () => (
    <>
        <Carousel  images={Data}/>
        <SquadSlider squad={Squad}/>
    </>
)

export default HomePage;