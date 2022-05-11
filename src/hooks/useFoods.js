import React, { useEffect, useState } from 'react';

const useFoods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/allfood')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return [foods, setFoods];
};

export default useFoods;