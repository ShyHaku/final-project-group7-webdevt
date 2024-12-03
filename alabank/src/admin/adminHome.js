import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

export const AdminHome = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <>
            <h1 className="text-center" style={{ paddingTop: 80 }}>Welcome Admin!</h1>

            <Container>
                <Row style={{ paddingTop: 80, paddingLeft: 80, paddingRight: 80, paddingBottom: 70 }}>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>See All Users</Card.Title>
                                <Card.Text>
                                    See all user accounts with their username, mobile number, and email.
                                </Card.Text>
                                <Button variant="success" as={Link} to="/users">All Users</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>See All Transactions</Card.Title>
                                <Card.Text>
                                    See all user transactions with their date, reference number, sender, recipient, amount, etc.
                                </Card.Text>
                                <Button variant="success" as={Link} to="/transactions">All Transactions</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>See Messages</Card.Title>
                                <Card.Text>
                                    See all user messages with their username, email, and address said messages.
                                </Card.Text>
                                <Button variant="success" as={Link} to="/messages">Messages</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Log Out Button */}
                <Row className="justify-content-center mt-4">
                    <Col xs="auto">
                        <Button 
                            variant="danger" 
                            size="md"  
                            onClick={handleLogout} 
                        >
                            Log Out
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AdminHome;
