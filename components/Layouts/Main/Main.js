import styles from './Main.module.css'

const MainLayout = ({ children }) => {
  return (
    <main className={styles.main}>
      {
        children
      }
    </main>
  )
}

export default MainLayout