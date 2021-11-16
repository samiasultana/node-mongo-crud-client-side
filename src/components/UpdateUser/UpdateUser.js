import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])

    // UPDATE USER
    const handleNameChange = e => {
        const updatedName = (e.target.value);
        const updatedUser = { name: updatedName, email: user.email };
        setUser(updatedUser);
    }
    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: user.name, email: updatedEmail };
        setUser(updatedUser);

    }
    const handleUpdateUser = e => {

        e.preventDefault();
    }
    return (
        <div>
            <h3>Update User<br/>Name: {user.name} <br/> Email: {user.email}</h3>
            <p>{id}</p>
            <form onsubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} value={user.name || ""}></input>
                <input type="email" onChange={handleEmailChange} value={user.email || ""}></input>
                <input type="submit" value="Update"></input>
            </form>
        </div>
    );
};

export default UpdateUser;