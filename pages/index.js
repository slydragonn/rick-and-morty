import Head from 'next/head'
import { CounterInfo, Header, MainLayout, Pagination, SearchBox, Table, TableLayout, Title } from '../components'
import { useCharacters } from '../hooks'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {
    characters,
    pageUrls,
    nextPage,
    previusPage,
    filter,
    counters,
    reset,
    info
  } = useCharacters('https://rickandmortyapi.com/api/character')

  return (
    <div>
      <Head>
        <title>Rick y Morty - Aveonline</title>
        <meta name="description" content="Rick y Morty - Aveonline" />
        <link rel="icon" href="/assets/rick-morty.webp" />
      </Head>
      <Header reset={reset} info={info}/>
      <MainLayout>
        <Title>Personajes</Title>
        <section className={styles.info}>
          <CounterInfo counters={counters}/>
          <SearchBox filter={filter}/>
        </section>
        <TableLayout>
          {
            characters
            ? <Table characters={characters} />
            : <p>Sin Resultados</p>
          }
        </TableLayout>
        <Pagination
          pageUrls={pageUrls}
          nextPage={nextPage}
          previusPage={previusPage}
        />
      </MainLayout>
    </div>
  )
}
