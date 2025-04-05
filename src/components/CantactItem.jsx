import React from 'react'
import styles from "./CantactItem.module.css"

function CantactItem({data:{id,name,lastName,email,phone},deleteHandler}) {
  return (
    <div>
      <li key={id} className={styles.item}>
              <p>
                {name}
                {lastName}
              </p>
              <p>
                <span>💻</span>
                {email}
              </p>
              <p>
                <span>📞</span>
                {phone}
              </p>
              <button onClick={()=>deleteHandler(id)}>🗑</button>
            </li>
    </div>
  )
}

export default CantactItem
