import './App.css'
import { useState } from 'react'
import imageRickMorty from './img/rick-and-morty-31013.png'
import CharacterCard from './components/CharacterCard'

function App() {
  // fetch to the API
  const [characters, setCharacters] = useState(null)
  const fetchApi = async () => {
    const options = {
      method: 'GET',
      headers: new Headers({ 'Content-type': 'application/json' }),
      mode: 'cors',
    }
    const response = await fetch('https://rickandmortyapi.com/api/character', options)
    const characterApi = await response.json()
    // console.log(characterApi)
    setCharacters(characterApi.results)
  }

  // animation button onClick
  const [isActive, setIsActive] = useState(false)
  const buttonAnimation = (event) => {
    setIsActive((current) => !current)
  }
  // render App
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <CharacterCard characters={characters} setCharacters={setCharacters} setIsActive={setIsActive} />
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home' />
            <button
              onClick={() => {
                fetchApi()
                buttonAnimation()
              }}
              className={isActive ? 'activeLoading' : ''}>
              Buscar Personajes
              <span className='load loading'></span>
            </button>
          </>
        )}
      </header>
    </div>
  )
}

export default App
