import React from 'react';
import s1 from '../../../images/s-img-1.jpg';
import s2 from '../../../images/s-img-2.jpg';
import s3 from '../../../images/s-img-3.jpg';
import s4 from '../../../images/s-img-4.jpg';
import s5 from '../../../images/s-img-5.jpg';
import s6 from '../../../images/s-img-6.jpg';
import s_1 from '../../../images/s-1.png';
import s_2 from '../../../images/s-2.png';
import s_3 from '../../../images/s-3.png';
import s_4 from '../../../images/s-4.png';
import s_5 from '../../../images/s-5.png';
import s_6 from '../../../images/s-6.png';

import './Speciality.css'

const Speciality = () => {
    return (
        <>
            <section className="speciality m-3" id="speciality">

                <h1 className="heading"> our <span>speciality</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img className="image" src={s1} alt="" />
                        <div className="content">
                            <img src={s_1} alt="" />
                            <h3>naga burger</h3>
                            <p>Naga burger is made with home made bread and infused with best quality masala and chicken</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={s2} alt="" />
                        <div className="content">
                            <img src={s_2} alt="" />
                            <h3>extra cheese pizza</h3>
                            <p>This contains with a burst of cheese</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={s3} alt="" />
                        <div className="content">
                            <img src={s_3} alt="" />
                            <h3> ice-cream</h3>
                            <p>Hoe made ice-cream with no preservative</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={s4} alt="" />
                        <div className="content">
                            <img src={s_4} alt="" />
                            <h3>cold drinks</h3>
                            <p>all kind of drinks are available here</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={s5} alt="" />
                        <div className="content">
                            <img src={s_5} alt="" />
                            <h3>tasty sweets</h3>
                            <p>all kind of sweets are hand made with garden fresh items</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="image" src={s6} alt="" />
                        <div className="content">
                            <img src={s_6} alt="" />
                            <h3>healty breakfast</h3>
                            <p>Pre-defined platter as well as custom platter is available</p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Speciality;