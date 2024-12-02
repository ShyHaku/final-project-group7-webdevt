import React from 'react';
import { Table, Alert } from 'react-bootstrap';

const TransactionHistory = ({ transactions }) => {
    return (
        <div className="mt-4">
            <h2 className="transaction-title">Transaction History</h2>
            {transactions.length === 0 ? (
                <Alert variant="info">No transactions found.</Alert>
            ) : (
                <div className="table-container">
                    <Table striped bordered hover>
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
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{new Date(transaction.date).toLocaleString()}</td>
                                    <td>{transaction.referenceNo}</td>
                                    <td>{transaction.sender}</td>
                                    <td>123456789</td>
                                    <td>{transaction.recipient}</td>
                                    <td>{transaction.recipientAccountNo}</td>
                                    <td>₱{transaction.amount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default TransactionHistory;
