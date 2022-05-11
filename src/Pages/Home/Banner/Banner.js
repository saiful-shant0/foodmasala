import React from 'react';
import './Banner.css'
import banner from '../../../images/home-img.png'

const Banner = () => {
    return (
        <div >
            <section className="home mx-3" id="home">

                <div className="content">
                    <h3>D E S H I    K H A B A R</h3>
                    <p>In deshi khabar we believe that "food is love when words are inadequate". Believeing this, we are here to provide you the best quality of food at lowest price</p>
                    <a href="/allfoods" className="btn">order now</a>
                </div>

                <div className="image">
                    <img src={banner} alt="" />
                </div>

            </section>
        </div>
    );
};

export default Banner;