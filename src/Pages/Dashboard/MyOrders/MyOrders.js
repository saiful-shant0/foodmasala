import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setAppointments] = useState([]);
    useEffect(() => {
        const url = `https://red-chilli.herokuapp.com/orders?email=${user.email}`;

        fetch(url,
            {
                headers: {
                    // 'authorization': `Bearer ${token}`
                }
            }
        )
            .then(res => res.json())
            .then(data => setAppointments(data))

    }, [user.email])
    let total = 0;
    for (const order of orders) {
        total = total + order.price;


    }

    return (
        <div>
            <Header></Header>
            <h2 className="App">Total Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Food Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.FoodName}
                                </TableCell>
                                <TableCell align="center">{row.price}৳</TableCell>
                                <TableCell align="right">
                                    <Button>Cancle</Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <h3 className='App'>Total Bill : {total}৳</h3>
        </div>
    );
};

export default MyOrders;