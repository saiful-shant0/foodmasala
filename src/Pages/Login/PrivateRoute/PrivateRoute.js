import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    console.log(user)
    const auth = useAuth();
    console.log(auth);
    const location = useLocation();
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    return user ? children : <Navigate to="/login" />
};
export default PrivateRoute;