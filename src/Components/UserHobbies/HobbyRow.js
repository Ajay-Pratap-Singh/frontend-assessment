import React from 'react';
import { deleteUserHobby } from '../../Services/services';

const HobbyRow = ({ name, passionLevel, year, userId, id, selectedUserChangeHandler }) => {
    const deleteHobby = async () => {
        const data = await deleteUserHobby(id, userId);
        if (data.user) {
            selectedUserChangeHandler(null, data.user);
        }
    };
    return (
        <tr>
            <td>{passionLevel}</td>
            <td>{name}</td>
            <td>{year}</td>
            <td className="action" onClick={deleteHobby}>
                <img src="/delete.png" alt="Delete Hobby" />
            </td>
        </tr>
    );
};

export default HobbyRow;
