import React from 'react';
import AddHobby from './AddHobby';
import HobbyRow from './HobbyRow';

const UserHobbies = ({ userId, hobbies, selectedUserChangeHandler }) => (
    <table id="hobbies-table">
        <tbody>
            <AddHobby userId={userId} selectedUserChangeHandler={selectedUserChangeHandler} />
            {hobbies?.map((hobby) => (
                <HobbyRow userId={userId} key={hobby._id} id={hobby._id} name={hobby.name} passionLevel={hobby.passionLevel} year={hobby.year} selectedUserChangeHandler={selectedUserChangeHandler} />
            ))}
        </tbody>
    </table>
);
export default UserHobbies;
