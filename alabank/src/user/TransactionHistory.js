import React from 'react';
import { Table, Alert } from 'react-bootstrap';

const TransactionHistory = ({ transactions }) => {
    return (
        <div className="mt-4">
            <h2>Transaction History</h2>
            {transactions.length === 0 ? (
                <Alert variant="info">No transactions found.</Alert>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            
                            <th>Sender</th>
                            <th>Recipient</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                
                                <td>{transaction.sender}</td>
                                <td>{transaction.recipient}</td>
                                <td>${transaction.amount.toFixed(2)}</td>
                                <td>{new Date(transaction.date).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default TransactionHistory;