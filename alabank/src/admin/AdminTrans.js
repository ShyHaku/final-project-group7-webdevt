import React from "react";
import { Table } from "react-bootstrap";

export const AdminTrans = () => {
    return (
        <>
        <div className="m-5">
            <h1 className="text-center mb-4">All Transactions</h1>

            <Table striped hover>
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
                <td>2024-11-26</td>
                <td>9685</td>
                <td>user1</td>
                <td>***1234</td>
                <td>user2</td>
                <td>***5678</td>
                <td>20,000.00</td>
                </tr>
            </tbody>
            </Table>
        </div>
        </>
    )
}