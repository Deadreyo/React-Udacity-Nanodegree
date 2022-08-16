import { useState } from "react";

export default function CreateUser({ isUsernameUnique, addUser }) {

    const [error, setError] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if(isUsernameUnique(username)) {
            setError('')
            addUser({
                firstName,
                lastName,
                username,
                games: 0,
            })
        } else {
            setError('This username has been taken.')
        }
    }

    function allFieldsFilled() {
        return firstName && lastName && username
    }

    return (
        <form className="create-user-form" onSubmit={handleSubmit}>
            {
                error && <p className="error">{error}</p>
            }
            <label>First Name: <input type="text" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/></label>
            <label>Last Name: <input type="text" placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/></label>
            <label>Username: <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/></label>
            <button disabled={!allFieldsFilled()}>Add User</button>
        </form>
    )
}