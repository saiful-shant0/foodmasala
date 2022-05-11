import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

const Gallery = ({ food }) => {
    console.log(food)


    const { _id, name, photo, type, origine, price } = food;
    let history = useNavigate();
    const handleclick = (id) => {
        const url = `/food/${_id}`;
        history(url)
    }


    return (

        <div className="box">
            <img src={photo} alt="" />
            <div className="content">
                <h3>{name}</h3>

                <p>Price: {price}</p>
                <Button onClick={() => handleclick(_id)} variant="warning"> Order Now </Button>
            </div>
        </div>



    );
};

export default Gallery;