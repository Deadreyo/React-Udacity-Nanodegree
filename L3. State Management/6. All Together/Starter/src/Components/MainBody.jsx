import { useState } from "react";
import CreateUser from "./CreateUser";
import UsersList from "./UsersList";

export default function MainBody() {

    const [users, setUsers] = useState([])

    const isUsernameUnique = (username) => (
        users.every(user => user.username !== username)
    )
    
    const addUser = (user) => {
        setUsers([...users, user])
    }

    return (
        <main class="main-body">
            <CreateUser isUsernameUnique={isUsernameUnique} addUser={addUser}/>
            <UsersList users={users} />
        </main>
    )
}