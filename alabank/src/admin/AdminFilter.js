import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const AdminFilter = () => {

    const navigate = useNavigate();

    return (
        <>
        <div className="m-5">
            <h1 className="text-center mb-4">Filter Transactions</h1>

            <Container style={{ paddingLeft: 345}}>
                <Row className="align-items-center">
                <Col md="auto">
                    <Button variant="success" onClick={() => navigate('byDate')}>By Date</Button>
                </Col>
                <Col md="auto">
                    <Button variant="success" onClick={() => navigate('byRef')}>By Reference Number</Button>
                </Col>
                <Col md="auto">
                    <Button variant="success" onClick={() => navigate('byAmount')}>By Amount</Button>
                </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}