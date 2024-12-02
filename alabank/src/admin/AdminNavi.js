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
            <Nav.Link as={Link} to="/create">Create</Nav.Link>
            <Nav.Link as={Link} to="/delete">Delete</Nav.Link>
            <Nav.Link as={Link} to="/edit">Edit</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            <Nav.Link as={Link} to="/new">New Accounts</Nav.Link>
            <Nav.Link as={Link} to="/transactions">All Transactions</Nav.Link>
            <Nav.Link as={Link} to="/filter">Filter</Nav.Link>
            <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
          </Nav>
        </Container>
        </Navbar>

        <Outlet />
        </>
    )
}