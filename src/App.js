import { useEffect, useState } from 'react';
import './App.css';
import { fetchUserDetails, fetchUsers } from './Services/services';
import UserHobbies from './Components/UserHobbies/UserHobbies';
import UsersList from './Components/UsersList';

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const addUserToList = (user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    const selectedUserChangeHandler = (userToSelect, response) => {
        if (response) {
            setSelectedUser(response);
            return;
        } else if (JSON.stringify(userToSelect) !== JSON.stringify(selectedUser)) {
            fetchUserDetails(userToSelect._id).then((data) => {
                setSelectedUser(data.user);
            });
        } else {
            //do nothing
        }
    };

    useEffect(() => {
        fetchUsers().then((data) => {
            setUsers(data.users);
        });
    }, []);

    return (
        <>
            <h2>User Hobbies</h2>
            <div className="App">
                <UsersList selectedUserId={selectedUser?._id} addUserToList={addUserToList} users={users} handleUserClick={selectedUserChangeHandler} />
                {selectedUser && <UserHobbies userId={selectedUser?._id} hobbies={selectedUser?.hobbies} selectedUserChangeHandler={selectedUserChangeHandler} />}
            </div>
        </>
    );
}

export default App;
