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

import './Speciality.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';





const Speciality = ({ food }) => {

    const { _id, name, photo, type, origine, description } = food;
    const des = description.slice(0, 70);
    let history = useNavigate();
    const handleclick = (id) => {
        const url = `/food/${_id}`;
        history(url)
    }


    return (
        <>

            {food.type == 'Special' &&
                <div className="box">
                    <Button onClick={() => handleclick(_id)} variant="warning">  <img className="image" src={photo} alt="" /> </Button>

                    <div className="content">
                        <img src={s_2} alt="" />
                        <h3>{name}</h3>
                        <br />
                        <br />
                        <p>{des}</p>
                        <Button onClick={() => handleclick(_id)} variant="warning"> Order Now </Button>
                    </div>
                </div>}




        </>
    );
};

export default Speciality;