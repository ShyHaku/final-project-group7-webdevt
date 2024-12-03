import React from "react";
import { Table, Button } from 'react-bootstrap';

export const AdminMsgs = ({ msgsArr, setMsgsArr }) => {

    const resolveMsg = (username) => {
        const newMsg = msgsArr.filter((user) => user.username !== username);
        setMsgsArr(newMsg);
        alert(`${username}'s message has been addressed!`);
    };

    if (msgsArr.length === 0) {
        return <h3 className="text-center mt-5">No messages to display</h3>;
    }

    return (
        <>
        <div className="m-5">
            <h1 className="text-center mb-4">Messages</h1>

            <Table striped hover>
            <thead>
                <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {msgsArr.map((user) => (
                <tr key={user.username}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.msg}</td>
                    <td><Button variant="success" onClick={() => resolveMsg(user.username)}>Resolve</Button></td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
        </>
    )
}


export default AdminMsgs;