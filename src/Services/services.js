const API_BASE_URL = 'http://localhost:9090';

export const fetchUsers = async () => {
    const result = await fetch(`${API_BASE_URL}/users`);
    const data = await result.json();
    return data;
};

export const fetchUserDetails = async (userId) => {
    const result = await fetch(`${API_BASE_URL}/users/${userId}`);
    const data = await result.json();
    return data;
};

export const submitNewUser = async (username) => {
    const response = await fetch(`${API_BASE_URL}users`, {
        body: JSON.stringify({ name: username }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    return data;
};

export const submitNewHobby = async (hobby, userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/hobbies`, {
        body: JSON.stringify(hobby),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
};

export const deleteUserHobby = async (hobbyId, userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}/hobbies`, {
        body: JSON.stringify({ hobbyId: hobbyId }),
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
};
