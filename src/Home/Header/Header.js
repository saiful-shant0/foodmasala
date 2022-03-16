import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (

        <Navbar className='grad1' expand="lg">
            <Navbar.Brand href="#home">Deshi Khabar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav  " />
            <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                <Nav >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">Speciality</Nav.Link>
                    <Nav.Link href="#home">Popular</Nav.Link>
                    <Nav.Link href="#home">Gallery</Nav.Link>
                    <Nav.Link href="#home">Review</Nav.Link>
                    <Nav.Link href="#home">Order</Nav.Link>
                    <Nav.Link href="#home">Log In/ Sign Up</Nav.Link>
                </Nav>

            </Navbar.Collapse>



        </Navbar>
    );
};

export default Header;