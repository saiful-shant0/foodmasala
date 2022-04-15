import React from 'react';
import p1 from '../../../images/p-1.jpg';
import p2 from '../../../images/p-2.jpg';
import p3 from '../../../images/p-3.jpg';
import p4 from '../../../images/p-4.jpg';
import p5 from '../../../images/p-5.jpg';
import p6 from '../../../images/p-6.jpg';
import './Popular.css';


const Popular = () => {
    return (
        <section className="popular" id="popular">

            <h1 className="heading"> most <span>popular</span> foods </h1>

            <div className="box-container">

                <div className="box">
                    <span className="price"> $5 - $20 </span>
                    <img src={p1} alt="" />
                    <h3>Naga burger</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <a href="#" className="btn">order now</a>
                </div>
                <div className="box">
                    <span className="price"> $5 - $20 </span>
                    <img src={p2} alt="" />
                    <h3>musochar cakes</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <a href="#" className="btn">order now</a>
                </div>
                <div className="box">
                    <span className="price"> $5 - $20 </span>
                    <img src={p3} alt="" />
                    <h3>white sweets</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <a href="#" className="btn">order now</a>
                </div>
                <div className="box">
                    <span className="price"> $5 - $20 </span>
                    <img src={p4} alt="" />
                    <h3>cream cupcakes</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <a href="#" className="btn">order now</a>
                </div>
                <div className="box">
                    <span className="price"> $5 - $20 </span>
                    <img src={p5} alt="" />
                    <h3>cold drinks</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <a href="#" className="btn">order now</a>
                </div>
                <div className="box">
                    <span className="price"> $5 - $20 </span>
                    <img src={p6} alt="" />
                    <h3>cold ice-cream</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <a href="#" className="btn">order now</a>
                </div>

            </div>

        </section>
    );
};

export default Popular;