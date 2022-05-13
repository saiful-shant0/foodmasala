import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';


const Galleries = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/allfood')
            .then(res => res.json())
            .then(data => setFoods(data.slice(1, 6)))
    }, [])
    return (

        <section className="gallery" id="gallery">
            <h1 className="heading App"> Our Food <span className='text-danger'> Gallery </span> </h1>

            <div className="box-container">

                {
                    foods.map(food =>
                        <Gallery

                            key={food._id}
                            food={food}
                        ></Gallery>
                    )
                }
            </div>
            <Nav.Link as={Link} className="position-absolute end-0 me-5 mt-3" to="/allfoods">Explore More... </Nav.Link>
        </section>

    );
};

export default Galleries;