import React from 'react';
import './Header.css';
import { Button, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <Navbar className='grad1' expand="lg">
            <Navbar.Brand href="#home">RED CHILLI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav  " />
            <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                <Nav >
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    {/* <Nav.Link href="#home">Speciality</Nav.Link>
                    <Nav.Link href="#home">Popular</Nav.Link> */}
                    <Nav.Link as={Link} to="/allfoods">Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/review">Review</Nav.Link>
                    <Nav.Link as={Link} to="/myorders"> My Order</Nav.Link>
                    {/* {user?.email && <Nav.Link as={Link} to="/dashboard"> Dashboard</Nav.Link>} */}

                    {user?.email ? <Nav.Link as={Link} to="/login"><Button onClick={logOut} color="inherit">Logout</Button></Nav.Link>

                        :
                        <Nav.Link as={Link} to="/login">Log In/Register</Nav.Link>}

                </Nav>

            </Navbar.Collapse>



        </Navbar>
    );
};

export default Header;