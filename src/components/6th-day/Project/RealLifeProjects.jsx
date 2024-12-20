// src/components/RealLifeProject.jsx
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { Container } from "../../NeededComponents/common/Container";

export const RealLifeProject = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // 'searchTerm' used for search filter
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (newContact) => {
    setContacts([...contacts, { id: Date.now(), ...newContact }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null); // Reset after update
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
    setEditingContact(null); // Reset editing state in case of delete
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase()); // Normalize input to lowercase for comparison
  };

  const filteredContacts = contacts.filter((contact) =>
    (contact.name || '') // Ensure name is not null or undefined
      .toLowerCase()
      .includes(searchTerm)
  );

  return (
    <Container className="h-screen flex items-center justify-center bg-slate-600">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Contact Management App</h1>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <ContactForm
          addContact={addContact}
          editingContact={editingContact}
          updateContact={updateContact}
          cancelEdit={() => setEditingContact(null)} // Cancel editing
        />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
          setEditingContact={setEditingContact}
        />
      </div>
    </Container>
  );
};
