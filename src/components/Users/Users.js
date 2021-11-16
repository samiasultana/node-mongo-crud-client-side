import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);

    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm("Sure you wanna delete?");
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`,
                {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0)
                        alert("Deleted Successfully");
                    // remove from UI without reloading
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                })
        }
    }
    //     const handleDeleteUser = id => {
    //     const proceed=window.confirm("Sure you wanna delete?");
    //     if(proceed){
    //         fetch()
    //     }
    // } eta dile make sure korbe delete confirm kina


    return (
        <div>
            <h2>Total Users: {users.length}</h2>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}>{user.name}: {user.email}
                        <Link to={`/users/update/${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;