import { useState } from "react";
import Chat from "./Chat";


const users = [{ username: "Amy" }, { username: "John" }];

const initialMessages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

export default function ChatContainer() {

    const [messages, setMessages] = useState(initialMessages)

    function addMessage( message ) {
        setMessages([...messages, message])
    }

    return (
        
        <div className="container">
            <Chat messages={messages} user={users[0]} addMessage={addMessage} />
            <Chat messages={messages} user={users[1]} addMessage={addMessage} />
        </div>
    )
}