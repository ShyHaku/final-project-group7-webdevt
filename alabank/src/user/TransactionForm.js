import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid'; 

// Function to generate a shorter reference number
const generateReferenceNo = () => {
    return uuidv4().substring(0, 8).toUpperCase();
};

const TransactionForm = ({ onEditTransfer, error, setError }) => {
    const navigate = useNavigate();
    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [senderAccountNo, setSenderAccountNo] = useState('');
    const [recipientAccountNo, setRecipientAccountNo] = useState(''); 
    const [referenceNo] = useState(generateReferenceNo());
    const currentDate = new Date().toLocaleString();

    const validAccountNumber = '123456789'; 

    // Clear the error message when navigating away
    useEffect(() => {
        return () => {
            setError(''); 
        };
    }, [navigate, setError]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate that all fields are filled
        if (!sender || !recipient || !amount || !senderAccountNo || !recipientAccountNo) {
            setError('All fields are required.');
            return;
        }

        // Validate that amount is a valid number and >= 500
        const parsedAmount = parseFloat(amount);
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            setError('Amount must be a positive number.');
            return;
        }
        if (parsedAmount < 500) {
            setError('Amount must be at least ₱500.');
            return;
        }

        // Validate sender account number
        if (senderAccountNo !== validAccountNumber) {
            setError('Invalid sender account number. Please use the correct account number.');
            return;
        }

        const transferDetails = {
            date: currentDate,
            referenceNo,
            sender,
            recipient,
            senderAccountNo,
            recipientAccountNo, 
            amount: parsedAmount,
        };

        onEditTransfer(transferDetails);

        // Navigate to the transfer confirmation page
        navigate('/transfer-confirmation', { state: { transferDetails } });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center pt-5">
            <Row className="w-100">
                <Col md={6} lg={5} className="mx-auto">
                    <h3 className="text-center mb-4">Transfer Details</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formSender" className='mb-3'>
                            <Form.Label>Sender</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter sender's name" 
                                value={sender} 
                                onChange={(e) => setSender(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formSenderAccountNo" className='mb-3'>
                            <Form.Label>Sender Account No.</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter sender's account number" 
                                value={senderAccountNo} 
                                onChange={(e) => setSenderAccountNo(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formRecipient" className='mb-3'>
                            <Form.Label>Recipient</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter recipient's name" 
                                value={recipient} 
                                onChange={(e) => setRecipient(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formRecipientAccountNo" className='mb-3'>
                            <Form.Label>Recipient Account No.</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter recipient's account number" 
                                value={recipientAccountNo} 
                                onChange={(e) => setRecipientAccountNo(e.target.value)} 
                            />
                        </Form.Group>
                    
                        <Form.Group controlId="formAmount" className='mb-3'>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Enter amount" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)} 
                            />
                        </Form.Group>
                    
                        {error && <p className="text-danger">{error}</p>}
                        <br />
                        <Button variant="primary" type="submit" block>
                            Confirm Transfer
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default TransactionForm;
