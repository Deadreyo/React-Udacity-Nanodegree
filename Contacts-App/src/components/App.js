import "../css/App.css";
import ListContacts from "./ListContacts";
import { useState } from "react";
const contactsStarter = [
  {
    id: "karen",
    name: "Karen Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: "http://localhost:4000/karen.jpg",
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: "http://localhost:5001/richard.jpg",
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
];

const App = () => {
  const [contacts, setContacts] = useState(contactsStarter);

  function removeContact(contact) {
    setContacts(contacts.filter( c => c.id !== contact.id ));
  }

  return (
    <ListContacts contacts={contacts} onDeleteContact={removeContact} />
  )

};

export default App;
