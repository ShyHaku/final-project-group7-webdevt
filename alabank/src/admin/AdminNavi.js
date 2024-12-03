import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Bank } from 'react-bootstrap-icons';

export const AdminNavi = () => {
    const location = useLocation();

    // Check if the current route is `/login`, and don't render the navbar in that case
    if (location.pathname === '/login') {
        return null; // Return null to hide the navbar
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Bank />{' '}
                        Alabank Admin
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin">Home</Nav.Link>
                        <Nav.Link as={Link} to="/admin/users">All Users</Nav.Link>
                        <Nav.Link as={Link} to="/admin/create">Create</Nav.Link>
                        <Nav.Link as={Link} to="/admin/delete">Delete</Nav.Link>
                        <Nav.Link as={Link} to="/admin/edit">Edit</Nav.Link>
                        <Nav.Link as={Link} to="/admin/search">Search</Nav.Link>
                        <Nav.Link as={Link} to="/admin/new">New Accounts</Nav.Link>
                        <Nav.Link as={Link} to="/admin/transactions">All Transactions</Nav.Link>
                        <Nav.Link as={Link} to="/admin/filter">Filter</Nav.Link>
                        <Nav.Link as={Link} to="/admin/messages">Messages</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
};

export default AdminNavi;
