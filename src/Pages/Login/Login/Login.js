import { Alert, CircularProgress, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// const firebaseConfig = {
//     apiKey: "AIzaSyC6QqoyaxU6n404_fY8a_GmLHUcG1XQgno",
//     authDomain: "foodmasala-58131.firebaseapp.com",
//     projectId: "foodmasala-58131",
//     storageBucket: "foodmasala-58131.appspot.com",
//     messagingSenderId: "373291459785",
//     appId: "1:373291459785:web:6c348fe6497532694cd918"
//   };



const Login = () => {

    const [logInData, setLogInData] = useState({});
    const { loginUser, isLoading, user, authError } = useAuth();

    const location = useLocation();
    const history = useNavigate();
    const handleLogInSubmit = e => {
        loginUser(logInData.email, logInData.password, location, history)
        e.preventDefault();
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);

    }

    return (
        <Container sx={{ mt: 5 }}>
            <Typography sx={{ my: 5 }} variant="h3" gutterBottom>
                Welcome to Padrolo Motors
            </Typography>
            <Grid container spacing={2}>

                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    <Typography variant="body1" gutterBottom>
                        LogIn
                    </Typography>
                    <form onSubmit={handleLogInSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic" label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField id="standard-basic"
                            sx={{ width: '75%', m: 1 }}
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type="submit"
                            variant="contained">Log In</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/registration'>
                            <Button variant="text">New User? Please Register </Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <br />
                    <br />

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://www.nicepng.com/png/full/830-8305620_racing-motorbike-png-vector-for-a-motorcycle.png" alt="" />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;