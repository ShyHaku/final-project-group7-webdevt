
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Bank } from 'react-bootstrap-icons';

const NavigationBar = () => {
    return (
        <Navbar className="custom-navbar" expand="lg">
            <Navbar.Brand as={Link} to="/home"><Bank/>{' '}Alabank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/transaction">Transaction</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;