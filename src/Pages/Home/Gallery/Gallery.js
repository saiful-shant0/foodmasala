import React from 'react';
import g1 from '../../../images/g-1.jpg';
import g2 from '../../../images/g-2.jpg';
import g3 from '../../../images/g-3.jpg';
import g4 from '../../../images/g-4.jpg';
import g5 from '../../../images/g-5.jpg';
import g6 from '../../../images/g-6.jpg';
import g7 from '../../../images/g-7.jpg';
import g8 from '../../../images/g-8.jpg';
import g9 from '../../../images/g-9.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="gallery" id="gallery">

            <h1 className="heading"> our food <span> gallery </span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={g1} alt="" />
                    <div className="content">
                        <h3>home made food</h3>
                        <p>Food made by our best cook</p>
                        <a href="#" className="btn">ordern now</a>
                    </div>
                </div>
                <div className="box">
                    <img src={g2} alt="" />
                    <div className="content">
                        <h3>home made food</h3>
                        <p>Food made by our best cook</p>
                        <a href="#" className="btn">ordern now</a>
                    </div>
                </div>
                <div className="box">
                    <img src={g3} alt="" />
                    <div className="content">
                        <h3>home made food</h3>
                        <p>Food made by our best cook</p>
                        <a href="#" className="btn">ordern now</a>
                    </div>
                </div>
                <div className="box">
                    <img src={g4} alt="" />
                    <div className="content">
                        <h3>home made food</h3>
                        <p>Food made by our best cook</p>
                        <a href="#" className="btn">ordern now</a>
                    </div>
                </div>
                <div className="box">
                    <img src={g5} alt="" />
                    <div className="content">
                        <h3>home made food</h3>
                        <p>Food made by our best cook</p>
                        <a href="#" className="btn">ordern now</a>
                    </div>
                </div>
                <div className="box">
                    <img src={g6} alt="" />
                    <div className="content">
                        <h3>home made food</h3>
                        <p>Food made by our best cook</p>
                        <a href="#" className="btn">ordern now</a>
                    </div>
                </div>
                <div className="box">
                    <img src={g7} alt="" />
                    <div className="content">
                        <h3>home made food</h3>
                        <p>Food made by our best cook</p>
                        <a href="#" className="btn">ordern now</a>
                    </div>
                </div>
                <div className="box">
                    <img src={g8} alt="" />
                    <div className="content">
                        <h3>home made food</h3>
                        <p>Food made by our best cook</p>
                        <a href="#" className="btn">ordern now</a>
                    </div>
                </div>
                <div className="box">
                    <img src={g9} alt="" />
                    <div className="content">
                        <h3>home made food</h3>
                        <p>Food made by our best cook</p>
                        <a href="#" className="btn">ordern now</a>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Gallery;