import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Popular from '../Popular/Popular';
import Reviews from '../Reviews/Reviews';
import Speciality from '../Speciality/Speciality';
import Footer from '../../Shared/Footer/Footer'
import Works from '../Works/Works';
import Allfoods from '../Allfoods/Allfoods';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Speciality></Speciality>
            <Popular></Popular>
            <Works></Works>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;