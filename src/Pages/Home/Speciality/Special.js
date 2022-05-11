import React from 'react';
import useFoods from '../../../hooks/useFoods';
import Speciality from './Speciality';

const Special = () => {
    const [foods] = useFoods();

    return (
        <>
            <section className="speciality m-3" id="speciality">

                <h1 className="heading App"> Our <span className='text-danger'>Speciality</span> </h1>
                <div className="box-container">
                    {
                        foods.map(food => <Speciality
                            key={food._id}
                            food={food}
                        ></Speciality>
                        )
                    }
                </div>
            </section>

        </>
    );
};

export default Special;