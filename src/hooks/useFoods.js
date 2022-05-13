import React, { useEffect, useState } from 'react';

const useFoods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('https://red-chilli.herokuapp.com/allfood')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return [foods, setFoods];
};

export default useFoods;