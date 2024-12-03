import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

export const EditUser = ({ users, setUsers }) => {

    const [validated, setValidated] = useState(false);
    const [searchUser, setSearchUser ] = useState('');

    const [updateSelectValue, setUpdateSelectValue] = useState('');
    const [newValue, setNewValue] = useState('');

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
                if (updateSelectValue === 'Mobile Number') {
                    const updatedUser = { ...foundUser, mobileNumber: newValue };
                    const updatedUsers = users.map((user) => user.username === searchUser ? updatedUser : user);
                    setUsers(updatedUsers);
                    alert(`The mobile number of User ${foundUser.username} is edited from ${foundUser.mobileNumber} to ${newValue}.`);
                } else if (updateSelectValue === 'Email') {
                    const updatedUser = { ...foundUser, email: newValue };
                    const updatedUsers = users.map((user) => user.username === searchUser ? updatedUser : user);
                    setUsers(updatedUsers);
                    alert(`The email of User ${foundUser.username} is edited from ${foundUser.email} to ${newValue}.`);
                }
            }

            setSearchUser('');
            setUpdateSelectValue('');
            setNewValue('');
            setValidated(false);
        }

        setValidated(true);
    };

    return (
        <>
        <div className="m-5">
                <h1 className="text-center mb-4">Edit User Account</h1>

                <div style={{ paddingLeft: 300, paddingRight: 300 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="align-items-center mb-3">
                            <Col>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter username"
                                    value={searchUser }
                                    onChange={(e) => setSearchUser (e.target.value)}
                                />
                            </Form.Group>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" required
                                value={updateSelectValue} onChange={(e) => setUpdateSelectValue(e.target.value)}>
                                    <option value="">Edit Mobile Number or Email</option>
                                    <option value="Mobile Number">Mobile Number</option>
                                    <option value="Email">Email</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md="10" controlId="validationCustom05" style={{ marginRight: 23 }}>
                            <Form.Control type={updateSelectValue === 'Mobile Number' ? "text" : "email"}
                            placeholder="Enter New Information" required
                            value={newValue} onChange={(e) => setNewValue(e.target.value)} 
                            pattern={updateSelectValue === 'Mobile Number' ? "^09\\d{9}$" : undefined} />
                            </Form.Group>

                            <Col>
                                <Button type="submit" variant="success">Edit</Button>
                            </Col>
                    </Row>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default EditUser;