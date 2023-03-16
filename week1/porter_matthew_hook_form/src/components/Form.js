import React, { useState } from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("")

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password };
        console.log("Hello", newUser)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };
    return (
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) }/>
            </div>        
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>E-mail: </label>
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfPass(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>E-mail: { email }</p>
            <p>Password: { password }</p>
            <p>Confirm Password: { confPass }</p>
        </div>
        </>
    );
};

export default Form