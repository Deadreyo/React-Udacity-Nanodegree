import { useState } from "react"

export default function UsersList({ users }) {
    const [hideGames, setHideGames] = useState(false)

    const handleClick = () => {
        setHideGames(!hideGames)
    }

    return (
        <div>
            <button onClick={handleClick}>Hide Number of Games</button>
            {
                users.map( user => (
                    <p>{user.username} has played {hideGames? '*' : user.games} games.</p>
                ))
            }
        </div>
    )
}