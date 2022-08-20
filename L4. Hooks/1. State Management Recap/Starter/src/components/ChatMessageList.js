

export default function ChatMessageList({ messages, username }) {

    return (
        <ul className="message-list">
            {messages.map((message, index) => (
                <li
                key={index}
                className={
                    message.username === username
                    ? "message sender"
                    : "message recipient"
                }
                >
                <p>{`${message.username}: ${message.text}`}</p>
                </li>
            ))}
        </ul>
    )
}