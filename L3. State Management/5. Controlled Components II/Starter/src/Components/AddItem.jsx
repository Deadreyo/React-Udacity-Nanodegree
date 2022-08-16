import { useState } from "react"

export default function AddItem({ addItem }) {
    const [value, setValue] = useState('');
    function handleChange(e) {
        setValue(e.target.value);
    }
    function inputIsEmpty() {
        return value === '';
    }
    return (
        <form onSubmit={e => addItem(e, value)}>
        <input
            type="text"
            placeholder="Enter New Item"
            value={value}
            onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
        </form>
    )
}