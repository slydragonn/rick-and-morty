import Image from 'next/image'
import { dateFormat } from '../../../utils'
import styles from './Item.module.css'

const TableItem = ({characterInfo}) => {
  const {
    name,
    status,
    species,
    gender,
    origin,
    location,
    episode,
    created,
    image
  } = characterInfo

  const icon = status === 'Dead' ? '/assets/Icono de muerto.png' : '/assets/Icono de vivo.png'
  const date = dateFormat(created)


  //const episodeNames = useEpisode(episode)

  return (
    <tr>
      <td>{name}</td>
      <td><Image src={icon} alt="Vivo" width={16} height={16}/></td>
      <td>{species}</td>
      <td>{gender}</td>
      <td>{origin}</td>
      <td>{location}</td>
      <td>
        {episode.length}
      </td>
      <td>{date}</td>
      <td>
        <Image className={styles.imageIcon} src="/assets/Icono imagen.png" alt="Icono Imagen" width={18} height={14}/>
        <a className={styles.accion} href={image} target='_blank' rel='noreferrer'><span>Ver Imagen</span></a>
      </td>
    </tr>
  )
}

export default TableItem