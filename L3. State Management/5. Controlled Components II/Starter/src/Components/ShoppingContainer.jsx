import { useState } from "react";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import ItemsList from "./ItemsList";

export default function ShoppingContainer() {
    const [items, setItems] = useState([]);
  
    const addItem = (event, value) => {
      event.preventDefault();
      setItems([...items, value]);
    };
  
    const deleteLastItem = (event) => {
      setItems(items.slice(0, -1));
    };

    return(
        <>
            <h2>Shopping List</h2>
            <AddItem addItem={addItem} />
            <DeleteItem deleteLastItem={deleteLastItem} itemsNumber={items.length}/>
            <ItemsList items={items}/>
        </>
    )
}