import React, { useState } from "react";
import { Table, Row, Button, Col, Form } from "react-bootstrap";

export const AdFilterByRef = () => {

    const [validated, setValidated] = useState(false);
    const [searchTrans, setSearchTrans ] = useState('');
    const [foundTrans, setFoundTrans] = useState(null);

    const [transactions, setTransactions] = useState([
        {
            date: "Sat Nov 30 2024 21:01:00 GMT+0800 (Philippine Standard Time)",
            ref: "9685",
            sender: "user1",
            senderAcc: "1234",
            recipient: "user2",
            recipientAcc: "5678",
            amount: "20000.00"
        }
    ]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            const foundTrans = transactions.find((transaction) => transaction.ref === searchTrans);
            setFoundTrans(foundTrans);

            if (!foundTrans) {
                alert('Transaction not found!');
            }

            setSearchTrans('');
            setValidated(false);
        }

        setValidated(true);
    };

    return (
        <>
            <div className="m-5">
                <h1 className="text-center mb-4">Search for a Transaction By Reference Number</h1>

                <div style={{ paddingLeft: 300, paddingRight: 275 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="align-items-center">
                            <Form.Group as={Col} md="10" controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter reference number"
                                    value={searchTrans}
                                    onChange={(e) => setSearchTrans(e.target.value)}
                                />
                            </Form.Group>

                            <Col>
                                <Button type="submit" variant="success">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>

                {foundTrans && (
                <Table striped className="mt-5">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Reference No.</th>
                    <th>Sender</th>
                    <th>Sender Account No.</th>
                    <th>Recipient</th>
                    <th>Recipient Account No.</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                        <td>{foundTrans.date}</td>
                        <td>{foundTrans.ref}</td>
                        <td>{foundTrans.sender}</td>
                        <td>{foundTrans.senderAcc}</td>
                        <td>{foundTrans.recipient}</td>
                        <td>{foundTrans.recipientAcc}</td>
                        <td>{foundTrans.amount}</td>
                        </tr>
                </tbody>
                </Table>
                )}
            </div>
        </>
    )
}