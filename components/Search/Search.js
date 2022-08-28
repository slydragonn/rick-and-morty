import Image from 'next/image'
import styles from './Search.module.css'

const SearchBox = ({filter}) => {
  return (
    <div className={styles.container}>
      <Image
      src="/assets/Icono de busqueda.png"
      alt='Icono de Busqueda'
      width={15}
      height={16}
      />
      <input className={styles.input} placeholder="Buscar" onChange={(evt) => filter(evt.target.value)}/>
    </div>
  )
}

export default SearchBox