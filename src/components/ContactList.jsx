import React, { useState } from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const deleteContactHandler = (id) => {
    getContactId(id);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderContactList = filteredContacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={deleteContactHandler}
      key={contact.id}
    />
  ));

  return (
    <div className="main" style={{ padding: "1rem" }}>
      <h2>Contact List</h2>

      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
