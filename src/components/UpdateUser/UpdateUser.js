import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const { id } = useParams();
    const[user,setUser]=useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div>
            <h2>This is Updated: {user.name}</h2>
            <p>{id}</p>

        </div>
    );
};

export default UpdateUser;