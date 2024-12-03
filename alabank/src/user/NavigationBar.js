import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Bank } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const NavigationBar = () => {
    const location = useLocation();

    // Check if the current route is `/login`
    if (location.pathname === '/login') {
        return null; // Don't render the Navbar on the login page
    }

    return (
        <Navbar className="custom-navbar" expand="lg">
            <Navbar.Brand as={Link} to="/home">
                <Bank />{' '}Alabank
            </Navbar.Brand>
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
