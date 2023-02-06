import React, { useState } from 'react';
import { submitNewUser } from '../Services/services';

const AddUser = ({ addUserToList }) => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const submitUser = async () => {
        const data = await submitNewUser(user);
        if (data.message) {
            setMessage(data.message);
        } else if (data.user) {
            addUserToList(data.user);
            setMessage('');
            setUser('');
        } else {
            setMessage('Unexpected Output');
            console.log(data);
        }
    };
    return (
        <>
            <tr>
                <td>
                    <input type="text" placeholder="Enter name" value={user} onChange={(e) => setUser(e.target.value)} />
                </td>
                <td>
                    <input type="button" disabled={!user} onClick={submitUser} value="Add" />
                </td>
            </tr>
            {message && <div>{message}</div>}
        </>
    );
};

export default AddUser;
