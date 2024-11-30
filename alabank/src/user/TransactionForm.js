import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TransactionForm = ({ onTransfer, error, sender, setSender, recipient, setRecipient, amount, setAmount, handleGoBack }) => {
    const handleTransfer = (e) => {
        e.preventDefault();
        onTransfer(sender, recipient, amount);
    };
    
    const navigate = useNavigate();

    return (
        <Form onSubmit={handleTransfer} className="mt-4">
            <Form.Group controlId="formSender">
                <Form.Label>Sender</Form.Label>
                <Form.Control 
                    type="number" 
                    value={sender} 
                    onChange={(e) => setSender(e.target.value)} 
                    placeholder="Enter sender's account number" 
                />
            </Form.Group>
            <Form.Group controlId="formRecipient" className="mt-3">
                <Form.Label>Recipient</Form.Label>
                <Form.Control 
                    type="number" 
                    value={recipient} 
                    onChange={(e) => setRecipient(e.target.value)} 
                    placeholder="Enter recipient's account number" 
                />
            </Form.Group>
            <Form.Group controlId="formAmount" className="mt-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Enter amount" 
                    min="0"
                />
            </Form.Group>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            <Button variant="primary" type="submit" className="mt-3">
                Transfer
            </Button>
            <Button variant="secondary" onClick={() => navigate('/transaction')}  className="mt-3">
                Go Back
            </Button> 
        </Form>
    );
};

export default TransactionForm;