import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Bank } from 'react-bootstrap-icons';
import './HomePage.css';

const HomePage2 = () => {
  return (
    <div className="homepage">
      <div className="left-side"></div>
      <div className="right-side">
        <Card className="homepage-card">
          <Card.Body>
            <Card.Title className="text-center text-dark">Welcome to AlaBank <Bank/></Card.Title>
            <Card.Text className="text-center text-dark">
              Manage your finances easily and securely.
            </Card.Text>
            <div className="text-center">
              <Link to="/login">
                <Button className="btn" variant="primary">Login</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomePage2;
