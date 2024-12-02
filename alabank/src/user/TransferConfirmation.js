import React, { useEffect, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TransferConfirmation = ({ initialTransfer, onConfirm, balance }) => {
    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [recipientAccountNo, setRecipientAccountNo] = useState(''); 
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const [referenceNo, setReferenceNo] = useState('');
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const [transactionSuccess, setTransactionSuccess] = useState(false);
    const [showRedirectButton, setShowRedirectButton] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const defaultPin = '1234'; // Default PIN for confirmation
    const navigate = useNavigate();

    useEffect(() => {
        if (initialTransfer) {
            setSender(initialTransfer.sender);
            setRecipient(initialTransfer.recipient);
            setRecipientAccountNo(initialTransfer.recipientAccountNo);
            setAmount(initialTransfer.amount);
            setDate(initialTransfer.date);
            setReferenceNo(initialTransfer.referenceNo);
        }
    }, [initialTransfer]);

    const handleConfirm = () => {
        const roundedAmount = Math.round(amount);
        if (roundedAmount <= 0) {
            setError('Amount must be a positive number.');
            return;
        }
        if (roundedAmount < 500) {
            setError('Amount must be at least ₱500.');
            return; 
        }

        if (roundedAmount > balance) {
            setError('Insufficient funds for this transfer.');
            return; 
        }

        if (pin === defaultPin) {
            onConfirm(sender, recipient, roundedAmount, recipientAccountNo);
            setTransactionSuccess(true);
            setError('');
            setShowRedirectButton(true);
        } else {
            setError('Invalid PIN. Please try again.');
        }
    };

    const handleCancel = () => {
        navigate('/transactionform');
    };

    const handleRedirect = () => {
        navigate('/transaction');
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'recipient') setRecipient(value);
        if (name === 'recipientAccountNo') setRecipientAccountNo(value); 
        if (name === 'amount') {
            setAmount(value);
        }
    };

    const handleSaveChanges = () => {
        const roundedAmount = Math.round(amount);
        if (roundedAmount <= 0) {
            setError('Amount must be a positive number.');
            return;
        }
        if (roundedAmount < 500) {
            setError('Amount must be at least ₱500.');
            return;
        }
        setIsEditing(false); 
        setError('');
    };

    return (
        <div className="transfer-confirmation">
            <Card className="transfer-card">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Confirm Transfer</Card.Title>
                    {transactionSuccess && <Alert variant="success" className="text-center">Transfer successful!</Alert>}
                    {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                    
                    <Card.Text className="mb-3">
                        <strong>Sender:</strong> {sender}<br />
                        <strong>Recipient:</strong> {recipient}<br />
                        <strong>Recipient Account No:</strong> {recipientAccountNo || 'Not Available'}<br />
                        <strong>Amount:</strong> ₱{Math.round(amount)}<br />
                        <strong>Date:</strong> {new Date(date).toLocaleString()}<br />
                        <strong>Reference No:</strong> {referenceNo}
                    </Card.Text>

                    {isEditing && (
                        <Form className="mb-4">
                            <Form.Group controlId="formRecipient">
                                <Form.Label>Recipient</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="recipient"
                                    value={recipient} 
                                    onChange={handleEditChange} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formRecipientAccountNo" className="mt-3">
                                <Form.Label>Recipient Account No.</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="recipientAccountNo"
                                    value={recipientAccountNo} 
                                    onChange={handleEditChange} 
                                />
                            </Form.Group>

                            <Form.Group controlId="formAmount" className="mt-3">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    name="amount"
                                    value={amount} 
                                    onChange={handleEditChange} 
                                    min="500"
                                />
                            </Form.Group>
                        </Form>
                    )}

                    {!isEditing && !transactionSuccess && (
                        <Form className="mb-3">
                            <Form.Group controlId="formPin">
                                <Form.Label>Enter PIN to confirm:</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Enter your PIN" 
                                    value={pin} 
                                    onChange={(e) => setPin(e.target.value)} 
                                />
                            </Form.Group>
                        </Form>
                    )}

                    {!isEditing && !transactionSuccess && (
                        <div className="d-flex justify-content-between mb-3">
                            <Button variant="primary" onClick={handleConfirm} className="w-48">
                                Confirm Transfer
                            </Button>
                            <Button variant="secondary" onClick={handleCancel} className="w-48">
                                Cancel
                            </Button>
                        </div>
                    )}

                    {isEditing && !transactionSuccess && (
                        <Button onClick={handleSaveChanges} className="custom-edit-btn mt-3 w-100">
                            Save Changes
                        </Button>
                    )}

                    {!transactionSuccess && (
                        <Button className="custom-edit-btn mt-3 w-100" onClick={handleEdit}>
                             Edit Transfer Details
                        </Button>
                    )}

                    {showRedirectButton && (
                        <div className="mt-3 text-center">
                            <Button variant="success" onClick={handleRedirect} className="w-100">
                                Go to Transactions
                            </Button>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default TransferConfirmation;
