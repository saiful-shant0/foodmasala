import React from 'react';
import s1 from '../../../images/step-1.jpg';
import s2 from '../../../images/step-2.jpg';
import s3 from '../../../images/step-3.jpg';
import s4 from '../../../images/step-4.jpg';
import './Works.css';

const Works = () => {
    return (
        <div className="step-container">

            <h1 className="heading App">How We <span className='text-danger'>Works</span></h1>

            <section className="steps">

                <div className="box">
                    <img src={s1} alt="" />
                    <h3>Choose Your Favorite Food</h3>
                </div>
                <div className="box">
                    <img src={s2} alt="" />
                    <h3>Free And Fast Delivery</h3>
                </div>
                <div className="box">
                    <img src={s3} alt="" />
                    <h3>Easy Payments Methods</h3>
                </div>
                <div className="box">
                    <img src={s4} alt="" />
                    <h3>And Finally, Enjoy Your Food</h3>
                </div>

            </section>

        </div>

    );
};

export default Works;