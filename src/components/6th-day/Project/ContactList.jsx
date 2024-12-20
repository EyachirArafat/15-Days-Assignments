import React from 'react';

export const ContactList = ({ contacts, editContact, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className="border p-2 mb-2 flex justify-between items-center text-white">
          <div>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
          </div>
          <div>
            <button 
              onClick={() => editContact(contact.id, { name: prompt('Edit Name', contact.name) })} 
              className="bg-yellow-500 text-white px-4 py-2 mr-2"
            >
              Edit
            </button>
            <button 
              onClick={() => deleteContact(contact.id)} 
              className="bg-red-500 text-white px-4 py-2"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};