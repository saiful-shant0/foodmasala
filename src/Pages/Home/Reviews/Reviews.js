import React from 'react';
import p1 from '../../../images/pic1.png';
import p2 from '../../../images/pic2.png';
import p3 from '../../../images/pic3.png';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
const Reviews = () => {
    return (
        <section className="review" id="review">

            <h1 className="heading App"> Our Customers <span className='text-danger'>Reviews</span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={p1} alt="" />
                    <h3>Kathelin</h3>

                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />

                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />

                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke} />


                    <p>Best qualoty food I ever had. Couldn't give 5 star because of lttle late delivery.</p>
                </div>
                <div className="box">
                    <img src={p2} alt="" />
                    <h3>jimmy Rocker</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <p>best kind of food with lowest price. keep it up!!!!</p>
                </div>
                <div className="box">
                    <img src={p3} alt="" />
                    <h3>Dororo Kun</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <p>food quality and pricing are satisfactory. just need more kind of food item</p>
                </div>

            </div>

        </section>
    );
};

export default Reviews;