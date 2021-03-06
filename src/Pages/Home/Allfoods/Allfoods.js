import React, { useEffect } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useFoods from '../../../hooks/useFoods';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Gallery from '../Gallery/Gallery';


const Allfoods = () => {
    const [foods] = useFoods();

    return (
        <>
            <Header></Header>
            <section className="gallery" id="gallery">

                <h1 className="heading App "> Our Food <span className='text-warning'> Gallery </span> </h1>

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

            </section>
            <Footer></Footer>
        </>
    );
};

export default Allfoods;