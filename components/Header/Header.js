import Image from 'next/image'
import Notifications from '../Notifications'
import styles from './Header.module.css'

const Header = ({reset, info}) => {
  return(
    <header className={styles.header}>
      <Image
        src='/assets/Logo-RandM.png'
        alt='Logo Rick and Morty'
        width={137}
        height={48}
      />
      <section className={styles.header__icons}>
        <Notifications totalCharacters={info.count} totalPages={info.pages}/>
        <Image 
          src='/assets/Home.png'
          alt='Home'
          width={22}
          height={17}
          className={styles.home}
          onClick={reset}
        />
      </section>
    </header>
  )
}

export default Header