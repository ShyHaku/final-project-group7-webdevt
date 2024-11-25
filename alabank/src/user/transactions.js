import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const TransactionPage = () => {
    const [action, setAction] = useState('');
    const [sender, setSender] = useState('');
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState('');
    const [pin, setPin] = useState('');
    const [showPinModal, setShowPinModal] = useState(false);
    const [correctPin] = useState('1234'); // Hardcoded PIN for demonstration
    const [pinVerified, setPinVerified] = useState(false);
    const navigate = useNavigate(); // Initialize navigate for navigation
    

    const handleActionSelect = (selectedAction) => {
        setAction(selectedAction);
        setShowPinModal(true); // Not yet implemented
    };

    const handleTransfer = (e) => {
        e.preventDefault();
        setError('');

        if (!sender || !recipient || !amount) {
            setError("Please fill in all fields");
            return;
        }

        if (isNaN(amount) || amount <= 0) {
            setError("Amount must be a positive number");
            return;
        }

        
        const transaction = `Transferred ${amount} from ${sender} to ${recipient}`;
        setTransactions([...transactions, transaction]);
        setSender('');
        setRecipient('');
        setAmount('');
    };

    const handlePinSubmit = () => {
        if (pin === correctPin) {
            setShowPinModal(false);
            setPinVerified(true); 
            setPin('');
        } else {
            setError("Incorrect PIN. Please try again.");
            setPin(''); // Clear the PIN input
        }
    };

    const handleClosePinModal = () => {
        setShowPinModal(false);
        setAction(''); // Reset when modal is closed
    };

    return (
        <Container className="text-center mt-5">
            {!pinVerified ? (
                <>
                    <h2>Select Action</h2>
                    <div className="mb-3">
                        <Button variant="primary" onClick={() => navigate('/transactionform')} className="mx-2">
                            Transfer Funds
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/transactionhistory')} className="mx-2">
                            View Transaction History
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    {action === 'transfer' && (
                        <Form onSubmit={handleTransfer} className="mt-4">
                            <Form.Group controlId="formSender">
                                <Form.Label>Sender</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={sender} 
                                    onChange={(e) => setSender(e.target.value)} 
                                    placeholder="Enter sender's name" 
                                />
                            </Form.Group>
                            <Form.Group controlId="formRecipient" className="mt-3">
                                <Form.Label>Recipient</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={recipient} 
                                    onChange={(e) => setRecipient(e.target.value)} 
                                    placeholder="Enter recipient's name" 
                                />
                            </Form.Group>
                            <Form.Group controlId="formAmount" className="mt-3">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    value={amount} 
                                    onChange={(e) => setAmount(e.target.value)} 
                                    placeholder="Enter amount" 
                                />
                            </Form.Group>
                            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                            <Button variant="primary" type="submit" className="mt-3">
                                Transfer
                            </Button>
                        </Form>
                    )}

                    {action === 'history' && (
                        <ListGroup className="mt-4">
                            {transactions.length === 0 ? (
                                <ListGroup.Item>No transactions found.</ListGroup.Item>
                            ) : (
                                transactions.map((transaction, index) => (
                                    <ListGroup.Item key={index}>{transaction}</ListGroup.Item>
                                ))
                            )}
                        </ListGroup>
                    )}
                </>
            )}

            <Modal show={showPinModal} onHide={handleClosePinModal} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter PIN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formPin">
                        <Form.Label>PIN</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={pin} 
                            onChange={(e) => setPin(e.target.value)} 
                            placeholder="Enter your PIN" 
                        />
                    </Form.Group>
                    {error && <Alert variant="danger">{error}</Alert>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePinModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlePinSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default TransactionPage;