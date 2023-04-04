export default function CharacterCard(props) {
  const { characters, setCharacters, setIsActive } = props

  const resetCharacters = () => {
    setCharacters(null)
    setIsActive(false)
  }

  return (
    <div className='characters'>
      <h1>Personajes</h1>
      <span className='back-home' onClick={resetCharacters}>
        Volver
      </span>
      <div className='container-characters'>
        {characters.map((character, index) => (
          <div className='character-container' key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === 'Alive' ? (
                  <>
                    <span className='alive' />
                    Alive
                  </>
                ) : (
                  <>
                    <span className='dead' />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className='text-gray'>Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className='text-gray'>Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className='back-home' onClick={resetCharacters}>
        Volver
      </span>
    </div>
  )
}
