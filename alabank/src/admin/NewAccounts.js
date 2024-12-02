import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const NewAccounts = () => {

    const navigate = useNavigate();

    return (
        <>
        <div className="m-5">
            <h1 className="text-center mb-4">New User and Bank Accounts</h1>

            <Container style={{ paddingLeft: 425}}>
                <Row className="align-items-center">
                <Col md="auto">
                    <Button variant="success" onClick={() => navigate('userAccounts')}>User Accounts</Button>
                </Col>
                <Col md="auto">
                    <Button variant="success" onClick={() => navigate('bankAccounts')}>Bank Accounts</Button>
                </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}