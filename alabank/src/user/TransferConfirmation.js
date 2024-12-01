import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TransferConfirmation = ({ initialTransfer, onConfirm }) => {
    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState(0);
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [transactionSuccess, setTransactionSuccess] = useState(false);
    const defaultPin = '1234';
    const navigate = useNavigate();

    useEffect(() => {
        if (initialTransfer) {
            setSender(initialTransfer.sender);
            setRecipient(initialTransfer.recipient);
            setAmount(parseFloat(initialTransfer.amount) || 0);
        }
    }, [initialTransfer]);

    const handleConfirmClick = () => {
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin !== defaultPin) {
            setError('Incorrect PIN. Please try again.');
            return;
        }
        if (onConfirm) {
            onConfirm(sender, recipient, amount);
            setTransactionSuccess(true);
        }
        setShowModal(false);
    };

    const handleBackToTransactions = () => {
        navigate('/transaction');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setError('');
        setPin('');
    };

    return (
        <div className="container mt-5">
            <Card>
                <Card.Body>
                    <Card.Title>Confirm Transfer</Card.Title>
                    <div>
                        <p><strong>Sender:</strong> {sender}</p>
                        <p><strong>Recipient:</strong> {recipient}</p>
                        <p><strong>Amount:</strong> ₱{amount.toFixed(2)}</p>
                    </div>

                    <Button variant="primary" onClick={handleConfirmClick} className="me-2">
                        Confirm Transfer
                    </Button>
                    <Button variant="danger" onClick={() => navigate('/transactionform')}>
                         Cancel
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your PIN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicPin">
                            <Form.Label>Enter your PIN</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter PIN"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {transactionSuccess && (
                <div className="mt-3">
                    <Alert variant="success">
                        Transaction Successful!
                    </Alert>
                    <Button variant="success" onClick={handleBackToTransactions}>
                        Go Back to Transactions
                    </Button>
                </div>
            )}
        </div>
    );
};

export default TransferConfirmation;