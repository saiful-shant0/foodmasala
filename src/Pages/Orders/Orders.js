import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Alert, Button } from 'react-bootstrap';
import OPenModal from './OPenModal';


const Orders = () => {
    const [orderSuccess, setOrderSuccess] = useState(false)

    const [food, setFood] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/allfood/${id}`)
            .then(res => res.json())
            .then(data => setFood(data))


    }, [id]);


    const { name, price, photo, description } = food;


    const [openOrder, setopenOrder] = React.useState(false);
    const handleOrderOpen = () => setopenOrder(true);
    const handleOrderClose = () => setopenOrder(false);
    return (
        <div>
            <Header></Header>
            <div className="text-center container shadow-lg p-3 my-5 bg-white rounded">
                {orderSuccess && <Alert severity="success">Order Successfully</Alert>}
                <img className='w-100' src={photo} alt="" />
                <h2> {name} </h2>
                <h4>Price: {price}</h4>
                <h6>{description}</h6>
                <Button onClick={handleOrderOpen} >Place Order </Button>
                <OPenModal
                    food={food}
                    openOrder={openOrder}
                    handleOrderClose={handleOrderClose}
                    setOrderSuccess={setOrderSuccess}
                >

                </OPenModal>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Orders;