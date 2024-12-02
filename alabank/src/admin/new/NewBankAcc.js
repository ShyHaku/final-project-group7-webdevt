import React from "react";
import { Table, Button } from 'react-bootstrap';

export const NewBankAcc = ({ newBankArr, setNewBankArr }) => {

    const verifyBank = (username) => {
        const newBank = newBankArr.filter((user) => user.username !== username);
        setNewBankArr(newBank);
        alert(`${username}'s new bank account has been verified!`);
    };

    const handleDelete = (username) => {
        const newBank = newBankArr.filter((user) => user.username !== username);
        setNewBankArr(newBank);
        alert(`${username}'s bank account opening request has been deleted!`);
    };

    if (newBankArr.length === 0) {
        return <h3 className="text-center mt-5">No new bank accounts to display</h3>;
    }

    return (
        <>
        <div className="m-5">
            <h1 className="text-center mb-4">New Bank Accounts</h1>

            <Table striped hover>
            <thead>
                <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Address</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {newBankArr.map((user) => (
                <tr key={user.username}>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.address}</td>
                    <td>{user.mobileNumber}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td><Button variant="success" onClick={() => verifyBank(user.username)}>Verify</Button></td>
                    <td><Button variant="success" onClick={() => handleDelete(user.username)}>Delete</Button></td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
        </>
    )
}