import styles from"./Header.module.css"
function Header() {
  return (
    <div className={styles.container}>
      <h1>Cantact App</h1>
      <p>
        <a href="">Botostart</a>| React.js 
      </p>
    </div>
  )
}

export default Header
