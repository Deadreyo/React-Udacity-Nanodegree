import { useState } from "react"

export default function ChatMessageInput({ submitText }) {

    const [text, setText] = useState('')

    function isDisabled() {
        return text.length === 0
    }

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        submitText(text)
    }
    
    return (
        <div>
            <form className="input-group" onSubmit={handleSubmit}>
                <input
                type="text"
                className="form-control"
                placeholder="Enter your message..."
                value={text}
                onChange={handleChange}
                />
                <div className="input-group-append">
                <button className="btn submit-button" disabled={isDisabled()}>
                    SEND
                </button>
                </div>
            </form>
        </div>
    )
}