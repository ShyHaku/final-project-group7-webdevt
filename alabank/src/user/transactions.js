import React, { useState } from 'react';
import { Container, Button, Alert, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const TransactionPage = () => {
    const [pin, setPin] = useState('');
    const [showPinModal, setShowPinModal] = useState(false);
    const [error, setError] = useState('');
    const [correctPin] = useState('1234');
    const navigate = useNavigate();

    const handleActionSelect = (selectedAction) => {
        if (selectedAction === 'history') {
            setShowPinModal(true);
        }
    };

    const handlePinSubmit = () => {
        if (pin === correctPin) {
            setShowPinModal(false);
            setPin(''); 
            navigate('/transactionhistory');
        } else {
            setError("Incorrect PIN. Please try again.");
            setPin('');
        }
    };

    const handleClosePinModal = () => {
        setShowPinModal(false);
    };

    return (
        <Container className="text-center mt-5">
            <h2>Select Action</h2>
            <div className="mb-3">
                <Button 
                    variant="primary" 
                    onClick={() => navigate('/transactionform')}
                    className="mx-2"
                >
                    Transfer Funds
                </Button>
                <Button 
                    variant="secondary" 
                    onClick={() => handleActionSelect('history')} 
                    className="mx-2"
                >
                    View Transaction History
                </Button>
            </div>

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