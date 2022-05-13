import React from 'react';
import p1 from '../../../images/pic1.png';
import p2 from '../../../images/pic2.png';
import p3 from '../../../images/pic3.png';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Header from '../../Shared/Header/Header';
const Reviews = ({ revie }) => {


    return (
        <>


            {typeof revie !== "undefined" && <div className="box">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa743gMgAQiEJZsTrjoLGS0Qgghopq7B2I6FYpewgRYhNzzAEiRVolY2GXZfB0ZvKUN-s&usqp=CAU' alt="" />
                <h3>{revie.name}</h3>
                <div className="stars">
                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />

                    <FontAwesomeIcon className='text-warning' icon={faStar} />
                    <FontAwesomeIcon className='text-warning' icon={faStar} />

                    <FontAwesomeIcon className='text-warning' icon={faStarHalfStroke} />
                </div>
                <p>{revie.description}</p>
            </div>}


        </>
    );
};

export default Reviews;