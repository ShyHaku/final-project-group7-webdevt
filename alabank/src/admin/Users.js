import React from "react";
import Table from 'react-bootstrap/Table';

export const Users = () => {
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
                <tr>
                <td>user1</td>
                <td>0912 345 6789</td>
                <td>abc@gmail.com</td>
                </tr>
                <tr>
                <td>user2</td>
                <td>0912 345 6789</td>
                <td>abc@gmail.com</td>
                </tr>
                <tr>
                <td>user3</td>
                <td>0912 345 6789</td>
                <td>abc@gmail.com</td>
                </tr>
            </tbody>
            </Table>
        </div>
        </>
    )
}