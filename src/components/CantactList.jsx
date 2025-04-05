// import React from "react";
import CantactItem from "./CantactItem";
import styles from "./CantactList.module.css"

function CantactList({cantacts=[],deleteHandler}) {
  console.log(cantacts);
  console.log(deleteHandler);
  
  return (
    <div className={styles.container}>
      <h3>Cantacts List</h3>
      {cantacts.length ? (
        <ul className={styles.cantacts}>
          {cantacts.map((cantact) => (
            <CantactItem key={cantact.id} data={cantact} deleteHandler={deleteHandler}/>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Cantacts Yet!</p>
      )}
    </div>
  );
}

export default CantactList;
