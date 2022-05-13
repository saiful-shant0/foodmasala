import { Backdrop, Box, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const OPenModal = ({ openOrder, handleOrderClose, food, setOrderSuccess }) => {
    const { name, price } = food;
    const { user } = useAuth();
    const initialorderinfo = { userName: user.displayName, email: user.email, phone: '' }

    const [orderinfo, setOrderInfo] = useState(initialorderinfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderinfo }
        newInfo[field] = value;

        setOrderInfo(newInfo)
    }
    const handleBookingSubmit = e => {
        const appointment = {
            ...orderinfo,
            price,
            FoodName: name,

        }
        fetch('https://red-chilli.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                    handleOrderClose();
                }
            })



        e.preventDefault();

    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openOrder}
            onClose={handleOrderClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openOrder}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '95%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '95%', m: 1 }}
                            id="outlined-size-small"
                            name="UserName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />

                        <TextField

                            sx={{ width: '95%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField

                            sx={{ width: '95%', m: 1 }}
                            name="email"
                            onBlur={handleOnBlur}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                        />

                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default OPenModal;