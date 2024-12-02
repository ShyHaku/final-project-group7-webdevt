import React from "react";
import { Table, Button } from 'react-bootstrap';

export const NewUsers = ({ setUsers, newUsersArr, setNewUsersArr }) => {

    if (newUsersArr.length === 0) {
        return <h3 className="text-center mt-5">No new users to display</h3>;
    }

    const removeUser = (username) => {
        const newUsers = newUsersArr.filter((user) => user.username !== username);
        setNewUsersArr(newUsers);
        alert(`${username}'s new user account has been verified!`);
        const userToAdd = newUsersArr.find((user) => user.username === username);
        if (userToAdd) {
            addNewUser(userToAdd); 
        }
    };

    const addNewUser = (user) => {
        const newUser = {
            username: user.username,
            mobileNumber: user.mobileNumber,
            email: user.email,
        };

        setUsers((prevUsers) => {
            return [...prevUsers, newUser ];
        });
    };

    const deleteUserAcc = (username) => {
        const newBank = newUsersArr.filter((user) => user.username !== username);
        setNewUsersArr(newBank);
        alert(`${username}'s user account registration has been deleted!`);
    };


    return (
        <>
        <div className="m-5">
            <h1 className="text-center mb-4">New User Accounts</h1>

            <Table striped hover>
            <thead>
                <tr>
                <th>Username</th>
                <th>Last 4 Digits of Bank Account</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {newUsersArr.map((user) => (
                <tr key={user.username}>
                    <td>{user.username}</td>
                    <td>{user.bankAccNo}</td>
                    <td>{user.mobileNumber}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td><Button variant="success" onClick={() => removeUser(user.username)}>Verify</Button></td>
                    <td><Button variant="success" onClick={() => deleteUserAcc(user.username)}>Delete</Button></td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
        </>
    )
}