import React, { useState } from 'react';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState('');

  const handleAddContact = () => {
    if (newContact.trim()) {
      setContacts([...contacts, newContact]);
      setNewContact('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <header style={{ backgroundColor: 'red', padding: '10px', color: 'white' }}>
        <h1>Contacts</h1>
      </header>
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Enter contact"
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button
          onClick={handleAddContact}
          style={{
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Add Contact
        </button>
      </div>
      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0 }}>
        {contacts.map((contact, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {contact}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
