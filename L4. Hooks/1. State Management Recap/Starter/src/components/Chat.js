import ChatMessageInput from "./ChatMessageInput";
import ChatMessageList from "./ChatMessageList";

export default function Chat({ messages, user, addMessage }) {

    function submitText( text ) {
        addMessage({
            username: user.username,
            text
        })
    }

    return (
        
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <ChatMessageList messages={messages} username={user.username} />
            <ChatMessageInput submitText={submitText} />
        </div>
    )
}