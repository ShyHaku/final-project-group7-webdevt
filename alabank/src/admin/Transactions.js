import React from "react";
import { Table } from "react-bootstrap";

export const AdminTrans = () => {
    return (
        <>
        <div className="m-5">
            <h1 className="text-center mb-3">All Transactions</h1>

            <Table striped hover>
            <thead>
                <tr>
                <th>Date</th>
                <th>Account No.</th>
                <th>Description</th>
                <th>Ref</th>
                <th>Withdrawals</th>
                <th>Deposits</th>
                <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>2024-11-26</td>
                <td>00005-123-456-7</td>
                <td>Payroll</td>
                <td colSpan={2}>9685</td>
                <td>20,000.00</td>
                <td>22,000.00</td>
                </tr>
            </tbody>
            </Table>
        </div>
        </>
    )
}