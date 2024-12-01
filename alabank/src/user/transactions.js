import React, { useState } from 'react';
import { Container, Button, Alert, Modal, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import { CashCoin, CardList } from 'react-bootstrap-icons';

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
         
            <p className="mb-4">Please choose one of the following actions to proceed:</p> {/* Temporary placeholder text */}
            
            <div className="d-flex justify-content-center">
                <Card className="mx-2" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Transfer Funds</Card.Title>
                        <br></br>
                        <CashCoin className="large-coin" />
                        <br></br>
                        
                        <Button 
                            variant="primary" 
                            onClick={() => navigate('/transactionform')}
                        >
                            Transfer Funds
                        </Button>
                    </Card.Body>
                </Card>

                <Card className="mx-2" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>View Transaction History</Card.Title>
                        <br></br>
                        <CardList className="card-list-wrapper"/>
                        <br></br>
                        <Button 
                            variant="primary" 
                            onClick={() => handleActionSelect('history')}
                        >
                            View History
                        </Button>
                    </Card.Body>
                </Card>
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