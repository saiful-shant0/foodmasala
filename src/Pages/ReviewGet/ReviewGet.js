import React, { useEffect, useState } from 'react';
import Reviews from '../Home/Reviews/Reviews';
import p1 from '../../images/pic1.png';
import p2 from '../../images/pic2.png';
import p3 from '../../images/pic3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

const ReviewGet = () => {
    const [review, setReview] = useState({});
    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))



    }, [])


    return (
        <>
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
                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                            <FontAwesomeIcon className='text-warning' icon={faStar} />

                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                            <FontAwesomeIcon className='text-warning' icon={faStar} />

                            <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke} />
                        </div>
                        <p>best kind of food with lowest price. keep it up!!!!</p>
                    </div>
                    <div className="box">
                        <img src={p3} alt="" />
                        <h3>Dororo Kun</h3>
                        <div className="stars">
                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                            <FontAwesomeIcon className='text-warning' icon={faStar} />

                            <FontAwesomeIcon className='text-warning' icon={faStar} />
                            <FontAwesomeIcon className='text-warning' icon={faStar} />

                            <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke} />
                        </div>
                        <p>food quality and pricing are satisfactory. just need more kind of food item</p>
                    </div>
                    {review && review.length > 0 &&
                        review.map(revie => <Reviews
                            key={revie._id}
                            revie={revie}
                        >

                        </Reviews>)

                    }
                </div>

            </section>
        </>
    );
};

export default ReviewGet;