import React, { useState } from 'react';

const AddContact = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (name === '' || email === '') return;
    console.log(name, email);
    onClose(); // Close the modal
  };

  return (
    <form className="ui form" onSubmit={add}>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="ui blue button" type="submit">
        Add
      </button>
      <button className="ui button" onClick={onClose} type="button">
        Cancel
      </button>
    </form>
  );
};

export default AddContact;
