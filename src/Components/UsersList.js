import React from 'react';
import AddUser from './AddUser';

const UsersList = ({ users, handleUserClick, addUserToList, selectedUserId }) => {
    return (
        <table id="users-table">
            <tbody>
                <AddUser addUserToList={addUserToList} />
                {users.map((user) => (
                    <tr key={user._id}>
                        <td className={selectedUserId === user._id ? 'active-user' : ''} colSpan={2} onClick={(e) => handleUserClick(user)}>
                            {user.name}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersList;
