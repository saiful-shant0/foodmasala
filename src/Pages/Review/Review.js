import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        axios.post('http://localhost:4000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <>
            <Header></Header>
            <div className="add-service my-5">
                <h2 className="text-center mt-5 mb-4 pt-5">Please Add a Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
                    <textarea {...register("description")} placeholder="Description" />
                    <input className="btn btn-danger mb-5 " type="submit" />
                </form>
            </div>
            <div className='fixed-bottom'> <Footer></Footer>  </div>
        </>
    );
};

export default Review;