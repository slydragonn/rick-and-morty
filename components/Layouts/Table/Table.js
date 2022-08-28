import styles from './Table.module.css'

const TableLayout = ({ children }) => {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}

export default TableLayout