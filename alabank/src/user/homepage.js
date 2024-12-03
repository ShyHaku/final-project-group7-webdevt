import React from 'react';
import { Container, Table, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const accountData = [
    { accountName: 'John Doe', accountNumber: '123456789' },
    { accountName: 'Jane Smith', accountNumber: '987654321' },
    { accountName: 'Michael Johnson', accountNumber: '112233445' },
    { accountName: 'Emily Davis', accountNumber: '667788990' },
  ];

  const handleViewTransaction = () => {
    navigate('/transaction');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
    
    <Container className="pt-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h1>Welcome to AlaBank</h1>
          <p>Your account overview is below</p>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>Account Number</th>
          </tr>
        </thead>
        <tbody>
          {accountData.map((account, index) => (
            <tr key={index}>
              <td>{account.accountName}</td>
              <td>{account.accountNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row className="text-center mt-4">
        <Col>
          <Button variant="primary" onClick={handleViewTransaction}>
            View Transaction Options
          </Button>
        </Col>
      </Row>

      {/* Logout Button */}
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

    <div className="footer">
        <div className="content">
          <h2>Get in Touch</h2>
          <p>
            <b>Address:</b> No. 40, Galle Road, Moratuwa, Alabang.
          </p>
          <p>
            <b>Email:</b> Alabank@gmail.com
          </p>
          <p>
            <b>Tel:</b> +94 71 485 1234
          </p>
          <p align="center">Alabank ©2024 Created by Group 7</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
