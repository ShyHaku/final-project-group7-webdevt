import React, { useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';

export const DeleteUser = ({ users, setUsers }) => {
    const [validated, setValidated] = useState(false);
    const [searchUser, setSearchUser ] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            const foundUser = users.find((user) => user.username === searchUser);

            if (!foundUser ) {
                alert('User not found!');
            } else {
                const confirmDelete = window.confirm(`Are you sure you want to delete User ${foundUser.username}'s account?`);

                if (confirmDelete) {
                    alert(`User ${foundUser.username}'s account has been deleted.`);
                    removeUser(searchUser);
                } else {
                    alert('User account deletion canceled.');
                }
            }

            setSearchUser('');
            setValidated(false);
        }

        setValidated(true);
    };

    const removeUser  = (username) => {
        const newUsers = users.filter((user) => user.username !== username);
        setUsers(newUsers);
    };

    return (
        <>
            <div className="m-5">
                <h1 className="text-center mb-4">Delete User Account</h1>

                <div style={{ paddingLeft: 300, paddingRight: 300 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="align-items-center">
                            <Form.Group as={Col} md="10" controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter username"
                                    value={searchUser}
                                    onChange={(e) => setSearchUser(e.target.value)}
                                />
                            </Form.Group>

                            <Col>
                                <Button type="submit" variant="success">Delete</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    )
}