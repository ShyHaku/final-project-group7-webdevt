import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Bank } from 'react-bootstrap-icons';

export const AdminNavi = () => {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Bank/>{' '}
            Alabank Admin
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/users">All Users</Nav.Link>
            <Nav.Link as={Link} to="/transactions">All Transactions</Nav.Link>
            <Nav.Link href="#">Create Account</Nav.Link>
            <Nav.Link href="#">Delete Account</Nav.Link>
            <Nav.Link href="#">Edit Account</Nav.Link>
            <Nav.Link href="#">Messages</Nav.Link>
          </Nav>
        </Container>
        </Navbar>

        <Outlet />
        </>
    )
}