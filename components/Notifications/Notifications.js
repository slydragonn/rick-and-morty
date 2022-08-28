import Image from "next/image"
import { useEffect, useState } from "react"
import styles from './Notifications.module.css'

const Notifications = ({totalCharacters, totalPages}) => {
  const [styleObject, setStyleObject ] = useState({
    display: 'none'
  })
  
  const toggleStyleClass = () => {
    if(styleObject.display === 'none') {
      const stylesShow = {
        zIndex: '10',
        position: 'absolute',
        top: '25px',
        right: '0px',
        display: 'flex',
        width: '200px',
        flexDirection: 'column',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 5px 10px rgb(0, 0, 0, .2)',
        padding: '10px 24px',
        fontSize: '13px',
        color: '#10454F'
      }
      return setStyleObject(() => stylesShow)
    }
    setStyleObject(() => ({
      display: 'none'
    }))
  }

  useEffect(() => {
    const onClick = (evt) => {
      const isTarget = evt.target.matches('.notifications')
      if(!isTarget) {
        setStyleObject(() => ({display: 'none'}))
      }
    }

    window.addEventListener('click', (evt) => onClick(evt))

    return () => {
      window.removeEventListener('click', (evt) => onClick(evt))
    }

  }, [])

  return (
    <section className={styles.relative}>
      <Image 
          src='/assets/Icono de campana.png'
          alt='Campana'
          width={16}
          height={19}
          onClick={toggleStyleClass}
          className='notifications'
        />
      <section style={styleObject} className='notifications'>
        <p>Total de Personajes <span className={styles.number}>{totalCharacters}</span></p>
        <p>Total de Paginas <span className={styles.number}>{totalPages}</span></p>
      </section>
    </section>
  )
}

export default Notifications