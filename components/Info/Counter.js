import Image from 'next/image'
import styles from './Counter.module.css'

const CounterInfo = ({counters}) => {
  const {total, alive, dead} = counters
  return(
    <section className={styles.counters}>
      <div className={styles.total}>
        <span className={styles.total__text}>Total de Personajes</span>
        <span className={styles.total__counter}>{total}</span>
      </div>
      <section className={styles.status}>
        <div className={styles.status__container}>
          <div className={styles.status__info}>
            <Image
              src="/assets/Icono de vivo.png"
              alt="Icono de vivo"
              width={16}
              height={16}
            />
            <span className={styles.status__text}>Personajes Vivos</span>
          </div>
          <span className={styles.status__counter}>{alive}</span>
        </div>
        <div className={styles.status__divider}></div>
        <div className={styles.status__container}>
          <div className={styles.status__info}>
            <Image
              src="/assets/Icono de muerto.png"
              alt="Icono de vivo"
              width={16}
              height={16}
            />
            <span className={styles.status__text}>Personajes Muertos</span>
          </div>
          <span className={styles.status__counter}>{dead}</span>
        </div>
      </section>
    </section>
  )
}

export default CounterInfo