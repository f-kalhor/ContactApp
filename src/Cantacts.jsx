// import React from 'react'

import { useState } from "react";

function Cantacts() {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    eamil: "",
    phone: "",
  });
  const [contacts, setContacts] = useState([])

  const addHandler = () => {
    setContacts((contacts)=>([ ...contacts, contact]))
    console.log(contact);
    console.log(contacts);
    setContact({
      name: "",
      lastName: "",
      eamil: "",
      phone: "",
    }) 
  };
  const changHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
    console.log(name, value);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={changHandler}
          name="name"
          value={contact.name}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={changHandler}
          name="lastName"
          value={contact.lastName}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={changHandler}
          name="eamil"
          value={contact.eamil}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={changHandler}
          name="phone"
          value={contact.phone}
        />
        <button onClick={addHandler}>AddHandler</button>
      </div>
    </>
  );
}

export default Cantacts;
