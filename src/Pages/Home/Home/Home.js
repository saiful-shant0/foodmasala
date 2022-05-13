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
import Header from '../../Shared/Header/Header';
import ReviewGet from '../../ReviewGet/ReviewGet';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Special></Special>
            <Popularity></Popularity>
            <Works></Works>
            <Galleries></Galleries>
            <Reviews></Reviews>
            <ReviewGet></ReviewGet>
            <Footer></Footer>

        </div>
    );
};

export default Home;