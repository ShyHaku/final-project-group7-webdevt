import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const TransactionForm = ({ onEditTransfer, error, setError }) => {
    const navigate = useNavigate();
    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!sender || !recipient || !amount) {
            setError('All fields are required.');
            return;
        }

        if (parseFloat(amount) <= 0) {
            setError('Amount must be a positive number.');
            return;
        }

        const transferDetails = {
            sender,
            recipient,
            amount: parseFloat(amount),
        };

        onEditTransfer(transferDetails);
        
        navigate('/transfer-confirmation');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formSender">
                <Form.Label>Sender's Account Number</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter sender's account number" 
                    value={sender} 
                    onChange={(e) => setSender(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formRecipient">
                <Form.Label>Recipient's Account Number</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter recipient's account number" 
                    value={recipient} 
                    onChange={(e) => setRecipient(e.target.value)} 
                    />
                    </Form.Group>
        
                    <Form.Group controlId="formAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control 
                            type="number" 
                            placeholder="Enter amount" 
                            value={amount} 
                            onChange={(e) => setAmount(e.target.value)} 
                        />
                    </Form.Group>
        
                    {error && <p className="text-danger">{error}</p>}
                    <br></br>
                    <Button variant="primary" type="submit">
                        Confirm Transfer
                    </Button>
                </Form>
            );
        };
        
        export default TransactionForm;