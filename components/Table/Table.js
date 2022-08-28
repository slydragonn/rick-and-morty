import TableItem from "./Item"
import styles from './Table.module.css'

const Table = ({ characters }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <th>Nombre</th>
          <th>Vivo</th>
          <th>Especie</th>
          <th>Genero</th>
          <th>Origen</th>
          <th>Locación</th>
          <th>Capitulos</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className={styles.body}>
        {
          characters.map(character => (
            <TableItem
              key={character.id}
              characterInfo={{
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,
                origin: character.origin.name,
                location: character.origin.name,
                episode: character.episode,
                created: character.created,
                image: character.image
              }} 
            />
          ))
        }
      </tbody>
    </table>
  )
}

export default Table