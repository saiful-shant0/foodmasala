import React from 'react';
import useFoods from '../../../hooks/useFoods';
import Popular from './Popular';

const Popularity = () => {
    const [foods] = useFoods();

    return (
        <section className="popular" id="popular">


            <h1 className="heading App"> Most <span className='text-danger'>Popular</span> Foods </h1>
            <div className="box-container">
                {
                    foods.map(food =>
                        <Popular
                            key={food._id}
                            food={food}
                        ></Popular>
                    )
                }
            </div>

        </section>
    );
};

export default Popularity;