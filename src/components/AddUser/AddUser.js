import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.insertedId){
                    alert("User added successfully")

                    e.target.reset();
                }
            });


        e.preventDefault()
    };

    return (
        <div>
            <h2>Please add an User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} />
                <input type="email" ref={emailRef} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;