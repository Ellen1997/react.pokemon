import { useEffect, useState } from 'react'
import './App.css'
import PokemonApp from './components/PokemonApplication'


function App() {

  const [pokemon, setPokemon] = useState([])
  const [show, setShow] = useState(false)


  useEffect(() => {
    if (show) {
      getPokemon()
    }
  }, [show])

  const getPokemon = async () => {

    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    let json = await response.json();
    setPokemon(json.results);
    }
  

  return (
    <>
    <div className = {show ? "pokemonstyle" : ""}>

    <button onClick={() => {setShow(!show)}}> {show ? "Stäng av" : "Starta Pokemon App"} </button>
    {show && <PokemonApp pokemonList={pokemon} />}
    </div>
    </>
  )
}

export default App
