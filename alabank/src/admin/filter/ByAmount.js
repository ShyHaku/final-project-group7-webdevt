import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";

export const AdFilterByAmount = () => {

    const [searchAmount, setSearchAmount] = useState('');
    const [filteredTrans, setFilteredTrans] = useState([]);

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

    useEffect(() => {
        if (searchAmount) {
          const filtered = transactions.filter((transaction) => transaction.amount === searchAmount);
          setFilteredTrans(filtered);
        }
        }, [searchAmount, transactions]);

    return (
        <>
            <div className="m-5">
                <h1 className="text-center mb-4">Filter Transactions By Amount</h1>

                <div style={{ paddingLeft: 300, paddingRight: 300 }}>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="number" min="0.01" step="0.01"
                                    placeholder="Enter amount"
                                    value={searchAmount}
                                    onChange={(e) => setSearchAmount(e.target.value)}
                                />
                            </Form.Group>
                </div>

                {searchAmount !== "" ? (
                    filteredTrans.length > 0 ? (
                        <Table striped hover className="mt-5">
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
                            {filteredTrans.map((transaction) => (
                                <tr>
                                <td>{transaction.date}</td>
                                <td>{transaction.ref}</td>
                                <td>{transaction.sender}</td>
                                <td>{transaction.senderAcc}</td>
                                <td>{transaction.recipient}</td>
                                <td>{transaction.recipientAcc}</td>
                                <td>{transaction.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                    ) : (
                        <p className="text-center mt-4">No transactions found with the selected amount.</p>
                    )
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}

export default AdFilterByAmount;