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

  return (
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
    </Container>
  );
};

export default HomePage;
