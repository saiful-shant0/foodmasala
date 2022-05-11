import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import p1 from '../../../images/p-1.jpg';
import p2 from '../../../images/p-2.jpg';
import p3 from '../../../images/p-3.jpg';
import p4 from '../../../images/p-4.jpg';
import p5 from '../../../images/p-5.jpg';
import p6 from '../../../images/p-6.jpg';
import './Popular.css';


const Popular = ({ food }) => {
    const { _id, name, photo, type, origine, price } = food;
    let history = useNavigate();
    const handleclick = (id) => {
        const url = `/food/${_id}`;
        history(url)
    }

    return (
        <>



            {food.type == 'popular' &&
                <div className="box">
                    <span className="price"> {price} </span>
                    <img src={photo} alt="" />
                    <h3>{name}r</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <Button onClick={() => handleclick(_id)} variant="warning"> Order Now </Button>
                </div>}
        </>




    );
};

export default Popular;