
export default function DeleteItem({ deleteLastItem, itemsNumber }) {

    function noItemsFound() {
        return itemsNumber === 0;
    }

    return(
        <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
        </button>
    )
}