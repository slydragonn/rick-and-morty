import styles from './Pagination.module.css'

const Pagination = ({pageUrls, nextPage, previusPage}) => {
  return (
    <section className={styles.container}>
      {
        pageUrls.previus && <button className={styles.button} onClick={previusPage}>Previus</button>
      }
      {
        pageUrls.next && <button className={styles.button} onClick={nextPage}>Next</button>
      }
    </section>
  )
}

export default Pagination