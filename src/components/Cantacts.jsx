// import React from 'react'
import { useState } from "react";

import CantactList from "./CantactList";
import inputs from "../constant/inputs";
import { v4 as uuidv4 } from 'uuid';
import styles from "./Cantact.module.css"

function Cantacts() {
  const [cantact, setCantact] = useState({
    id:"",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [cantacts, setCantacts] = useState([]);
  const [alert, setAlert] = useState("");
  

  const addHandler = () => {
    if (
      !cantact.name ||
      !cantact.email ||
      !cantact.lastName ||
      !cantact.phone
    ) {
      setAlert("Please Enter Valid Data!");
      return;
    }
    setAlert("");
    const newCantact={...cantact ,id:uuidv4() }
    setCantacts((cantacts) => [...cantacts, newCantact]);
    console.log(cantacts);
    setCantact({
      id:"",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  const changHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCantact((cantact) => ({ ...cantact, [name]: value }));
  };

  const deleteHandler=(id)=>{
    const newCantacts = cantacts.filter(cantact=> (cantact.id !== id))
    setCantacts(newCantacts)
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            onChange={changHandler}
            value={cantact[input.name]}
          />
        ))}

        <button onClick={addHandler}>AddHandler</button>
        </div>
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
        <CantactList cantacts={cantacts} deleteHandler={deleteHandler}/>
      </div>
    </>
  );
}

export default Cantacts;
