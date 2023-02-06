import React, { useEffect, useState } from 'react';
import { submitNewHobby } from '../../Services/services';

const AddHobby = ({ userId, selectedUserChangeHandler }) => {
    const [hobby, setHobby] = useState({ name: '', passionLevel: '', year: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        setHobby({ name: '', passionLevel: '', year: '' });
        setMessage('');
    }, [userId]);

    const submitHobby = async () => {
        const data = await submitNewHobby(hobby, userId);
        if (data.message) {
            setMessage(data.message);
        } else if (data.user) {
            selectedUserChangeHandler(null, data.user);
            setMessage('');
            setHobby({ name: '', passionLevel: '', year: '' });
        } else {
            setMessage('Unexpected Output');
            console.log(data);
        }
    };
    return (
        <>
            <tr>
                <td>
                    <input type="text" placeholder="Enter passion level" value={hobby.passionLevel} onChange={(e) => setHobby((prevHobby) => ({ ...prevHobby, passionLevel: e.target.value }))} />
                </td>
                <td>
                    <input type="text" placeholder="Enter hobby" value={hobby.name} onChange={(e) => setHobby((prevHobby) => ({ ...prevHobby, name: e.target.value }))} />
                </td>
                <td>
                    <input type="text" placeholder="Enter year" value={hobby.year} onChange={(e) => setHobby((prevHobby) => ({ ...prevHobby, year: e.target.value }))} />
                </td>
                <td>
                    <input type="button" disabled={!hobby.name || !hobby.passionLevel || !hobby.year} onClick={submitHobby} value="Add" />
                </td>
            </tr>
            {message && <div>{message}</div>}
        </>
    );
};

export default AddHobby;
