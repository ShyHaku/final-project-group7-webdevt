import React from "react";
import Table from 'react-bootstrap/Table';

export const DispUsers = ({ users }) => {

    if (users.length === 0) {
        return <h3 className="text-center mt-5">No users to display</h3>;
    }

    return (
        <>
        <div className="m-5">
            <h1 className="text-center mb-4">All Users</h1>

            <Table striped hover>
            <thead>
                <tr>
                <th>Username</th>
                <th>Mobile Number</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                <tr key={user.username}>
                    <td>{user.username}</td>
                    <td>{user.mobileNumber}</td>
                    <td>{user.email}</td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
        </>
    )
}