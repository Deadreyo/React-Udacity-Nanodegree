import PropTypes from 'prop-types'
import { useState } from 'react'

export default function ListContacts({ contacts, onDeleteContact }) {
    const [query, setQuery] = useState('') 

    const showingContacts = !query ? contacts : contacts.filter( c => c.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className='list-contacts'>
            <div className='list-contacts-top'>
                <input 
                    type="text" 
                    placeholder="Search contacts" 
                    value={query} 
                    className="search-contacts"
                    onChange={(event) => setQuery(event.target.value.trim())} />
            </div>

            {
                showingContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={() => setQuery('')}>Show all</button>
                    </div>
                )
            }
            <ol className="contact-list">
                {
                    showingContacts.map( contact => {
                        return (
                            <li key={contact.id} className="contact-list-item">
                                <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}></div>
                                <div className="contact-details">
                                    <p>{contact.name}</p>
                                    <p>{contact.handle}</p>
                                </div>
                                <button className="contact-remove" onClick={() => onDeleteContact(contact)}></button>
                                
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}