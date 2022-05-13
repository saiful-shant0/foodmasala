import { Alert, CircularProgress, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const Registration = () => {
    const [logInData, setLogInData] = useState({});
    const history = useNavigate();
    const { registerUser, isLoading, user, authError } = useAuth();

    const handleLogInSubmit = e => {
        if (logInData.password !== logInData.password2) {
            alert('Pass is Not match')
            return;
        }
        registerUser(logInData.email, logInData.password, logInData.name, history)

        e.preventDefault()
    }


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLogInData(newLoginData);


    }
    return (
        <div>
            <Container sx={{ mt: 10 }}>
                <Typography sx={{ my: 5 }} variant="h3" gutterBottom>
                    Please Registration to Food Masala
                </Typography>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                        {!isLoading && <form onSubmit={handleLogInSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic" label="Your Name"
                                name="name"
                                onChange={handleOnChange}
                                variant="standard" />
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
                            <TextField id="standard-basic"
                                sx={{ width: '75%', m: 1 }}
                                label="Re-Type Password"
                                type="password"
                                name="password2"
                                onChange={handleOnChange}
                                variant="standard" />

                            <Button
                                sx={{ width: '75%', m: 1 }}
                                type="submit"

                                variant="contained">Sin up</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/login'>
                                <Button variant="text">Already Register? Please LogIn </Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Created Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src="https://www.marions-kochbuch.de/dru-pic/0200.jpg" alt="" />
                    </Grid>

                </Grid>
            </Container>
            <div className='fixed-bottom'> <Footer></Footer></div>

        </div>

    );
};

export default Registration;