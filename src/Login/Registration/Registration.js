import { Alert, CircularProgress, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    const handleLogInSubmit = e => {

    }

    const handleOnChange = e => {


    }
    return (
        <Container sx={{ mt: 10 }}>
            <Typography sx={{ my: 5 }} variant="h3" gutterBottom>
                Please Registration to Padrolo Motors
            </Typography>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    <form onSubmit={handleLogInSubmit}>
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
                    </form>
                    <CircularProgress />
                    <Alert severity="success">Created Successfully</Alert>
                    <Alert severity="error">{ }</Alert>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://www.nicepng.com/png/full/830-8305620_racing-motorbike-png-vector-for-a-motorcycle.png" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Registration;