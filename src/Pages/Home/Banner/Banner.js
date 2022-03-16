import React from 'react';
import './Banner.css'
import banner from '../../../images/home-img.png'

const Banner = () => {
    return (
        <div >
            <section className="home mx-3" id="home">

                <div className="content">
                    <h3>R E D  C H I L L I</h3>
                    <p>In red chilli we believe that "food is love when words are inadequate". Believeing this, we are here to provide you the best quality of food at lowest price</p>
                    <button href="#" className="btn">order now</button>
                </div>

                <div className="image">
                    <img src={banner} alt="" />
                </div>

            </section>
        </div>
    );
};

export default Banner;