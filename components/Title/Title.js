import Image from 'next/image'
import styles from './Title.module.css'

const Title = ({children}) => {
  return (
    <section className={styles.container}>
      <Image
        src="/assets/camera-movie.png"
        alt='Camera Movie'
        width={36}
        height={34}
      />
      <h1 className={styles.text}>
        {children}
      </h1>
    </section>
  )
}

export default Title