import React from 'react';
import Carosel from '../Carosel/Carosel';


import NewsLetter from '../NewsLetter/NewsLetter';
import OurPlaces from '../OurPlaces/OurPlaces';
import ImageGallery from './../imageGallery/ImageGallery';
import Pricing from './../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Pricing></Pricing>
            <OurPlaces></OurPlaces>
            <NewsLetter></NewsLetter>
            <ImageGallery></ImageGallery>


        </div>
    );
};

export default Home;