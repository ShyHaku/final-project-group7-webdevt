import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Balance = ({ transactions, accountId, defaultBalance }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle going back to the transaction page
  const handleGoBack = () => {
    navigate('/transaction'); // Redirect to the transaction page
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '28rem' }}>
        <Card.Body>
          <Card.Title className="text-center">ATM Balance</Card.Title>
          <Row className="mb-3">
            <Col>
              <Card.Text className="text-muted">Your Balance:</Card.Text>
              {/* Display the balance */}
              <Card.Text className="display-4">₱{defaultBalance}</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text className="text-muted">Recent Transactions:</Card.Text>
              {transactions.length > 0 ? (
                <ul>
                  {transactions.slice(-3).map((transaction, index) => (
                    <li key={index}>
                      {transaction.sender} sent {transaction.amount} to {transaction.recipient} on {new Date(transaction.date).toLocaleString()}
                    </li>
                  ))}
                </ul>
              ) : (
                <Card.Text>No recent transactions</Card.Text>
              )}
            </Col>
          </Row>

          {/* Go Back Button */}
          <div className="text-center mt-4">
            <Button variant="secondary" onClick={handleGoBack}>
              Go Back
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Balance;
