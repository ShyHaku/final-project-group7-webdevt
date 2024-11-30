import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";

export const AdminFilterByDate = () => {

    const [dateInput, setDateInput] = useState('');
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
        if (dateInput) {
          //const filtered = transactions.filter((transaction) => transaction.date === dateInput);
          const filtered = transactions.filter(transaction => {
            const transactionDate = new Date(transaction.date); // Assuming transaction.date is in a valid date format
            return transactionDate.toISOString().split('T')[0] === dateInput; // Compare only the date part
          });

          setFilteredTrans(filtered);
        }
        }, [dateInput, transactions]);

    return (
        <>
            <div className="m-5">
                <h1 className="text-center mb-4">Filter Transactions By Date</h1>

                <div style={{ paddingLeft: 300, paddingRight: 305 }}>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Enter date"
                                    value={dateInput}
                                    onChange={(e) => setDateInput(e.target.value)}
                                />
                            </Form.Group>
                </div>

                <div>
                {dateInput !== "" ? (
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
                        <p className="text-center mt-4">No transactions found for the selected date.</p>
                    )
                ) : (
                    <></>
                )}
                </div>
            </div>
        </>
    ) 
}