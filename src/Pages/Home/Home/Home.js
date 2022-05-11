import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Popular from '../Popular/Popular';
import Reviews from '../Reviews/Reviews';
import Speciality from '../Speciality/Speciality';
import Footer from '../../Shared/Footer/Footer'
import Works from '../Works/Works';
import Allfoods from '../Allfoods/Allfoods';
import Special from '../Speciality/Special';
import Popularity from '../Popular/Popularity';
import Galleries from '../Gallery/Galleries';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Special></Special>
            <Popularity></Popularity>
            <Works></Works>
            <Galleries></Galleries>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;