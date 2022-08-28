import { useEffect, useState } from "react"

const useCharacters = (initialPage) => {
  const [charactersInfo, setCharactersInfo] = useState([])
  const [charactersFiltered, setCharactersFiltered] = useState([])

  const [counters, setCounters] = useState({
    total: 0,
    alive: 0,
    dead: 0
  })
  
  const [info, setInfo] = useState({
    count: 0,
    pages: 0
  })
  
  const [pageUrls, setPageUrls] = useState({
    next: false,
    previus: false
  })

  const [url, setUrl] = useState(initialPage)

  const reset = () => {
    setUrl(() => initialPage)
  }

  const nextPage = () => {
    if(!pageUrls.next) {
      return
    }

    setUrl(() => pageUrls.next)
  }

  const previusPage = () => {
    if(!pageUrls.previus) {
      return
    }
    setUrl(() => pageUrls.previus)
  }

  const getData = async (dataUrl) => {
    try {
      const response = await fetch(dataUrl)
      const data = await response.json()
      return data

    } catch (error) {
      console.log(error.message)
    }
  }

  const filter = (str) => {
    const searchWord = str.toLowerCase()
    if(!searchWord) {
      setCharactersFiltered(() => charactersInfo)
      return getCounters(charactersInfo)
    }

    const charactersFiltered = charactersInfo.filter(character => (
      character.name.toLowerCase().includes(searchWord)
    ))

    setCharactersFiltered(() => charactersFiltered)
    getCounters(charactersFiltered)
  }

  const getCounters = (characters) => {
    const totalCharacters = characters.length
    const aliveCharacters = characters.filter(character => character.status === 'Alive').length
    const deadCharacters = characters.filter(character => character.status === 'Dead').length

    setCounters(() => ({
      total: totalCharacters,
      alive: aliveCharacters,
      dead: deadCharacters
    }))
  }

  useEffect(() => {

    getData(url).then(res => {
      const newPageUrls = {
        next: res.info.next,
        previus: res.info.prev
      }
      setCharactersInfo(() => res.results)
      setCharactersFiltered(() => res.results)
      setPageUrls(() => newPageUrls)
      getCounters(res.results)
      setInfo(() => ({
        count: res.info.count,
        pages: res.info.pages
      }))
    })

  }, [url])

  return {
    characters: charactersFiltered,
    pageUrls,
    nextPage,
    previusPage,
    filter,
    counters,
    reset,
    info
  }
}

export default useCharacters