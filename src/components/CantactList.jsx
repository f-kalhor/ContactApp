// import React from "react";

function CantactList({cantacts=[]}) {
  console.log(cantacts);
  return (
    <div>
      <h3>Cantacts List</h3>
      {cantacts.length ? (
        <ul>
          {cantacts.map((cantact) => (
            <li key={cantact.id}>
              <p>
                {cantact.name}
                {cantact.lastName}
              </p>
              <p>
                <span>💻</span>
                {cantact.email}
              </p>
              <p>
                <span>📞</span>
                {cantact.phone}
              </p>
              <button>🗑</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Cantacts Yet!</p>
      )}
    </div>
  );
}

export default CantactList;
