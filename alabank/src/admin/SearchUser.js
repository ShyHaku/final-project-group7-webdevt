import React, { useState } from "react";
import { Table, Row, Button, Col, Form } from "react-bootstrap";

export const SearchUser = ({ users }) => {

    const [validated, setValidated] = useState(false);
    const [searchUser, setSearchUser ] = useState('');
    const [foundUser, setFoundUser] = useState(null);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            const foundUser = users.find((user) => user.username === searchUser);
            setFoundUser(foundUser);

            if (!foundUser ) {
                alert('User not found!');
            }

            setSearchUser('');
            setValidated(false);
        }

        setValidated(true);
    };

    return (
        <>
            <div className="m-5">
                <h1 className="text-center mb-4">Search User Account</h1>

                <div style={{ paddingLeft: 300, paddingRight: 275 }}>
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

                            <Col xs="auto" className="my-1">
                                <Button type="submit" variant="success">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>

                {foundUser && (
                <Table striped className="mt-5">
                    <thead>
                        <tr>
                        <th>Username</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{foundUser.username}</td>
                        <td>{foundUser.mobileNumber}</td>
                        <td>{foundUser.email}</td>
                        </tr>
                    </tbody>
                    </Table>
                )}
            </div>
        </>
    )
}