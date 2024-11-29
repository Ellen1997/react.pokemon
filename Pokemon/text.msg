App.jsx:

import { useEffect, useState } from 'react'
import './App.css'
import PokemonApp from './components/PokemonApplication'


function App() {

  const [pokemon, setPokemon] = useState([])
  let [show, setShow] = useState(false)
  let [pokeMode, setPokeMode] = useState(false)

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
    <div className = {pokeMode ? "regular" : ""}>
    <button onClick={() => {
      setShow(!show)
      setPokeMode(!pokeMode)
      }}> {show ? "Stäng av" : "Starta Pokemon App"}</button>
    {show && <PokemonApp pokemonList={pokemon} />}
    </div>
    </>
  )
}

export default App
_________________________________________________________________________

PokemonApplication.jsx:

import { useState } from "react"



const PokemonApp = ({pokemonList}) => {

// const [selectedPokemon, setSelectedPokemon] = useState("")
// const [Pokemonn, setPokemonn]  = useState("")

// let getPokemonn = async () => {
//     let respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${type.name}/`)
//     let json = await respone.json();
//     setPokemonn(json) 
// }

    return (
        <>
        <h1>POKEMON APPLICATION</h1>
        <h2 style={{textShadow: "3px"}}>Välj din Pokemon för att se dess info</h2>
    

        <label style={{color: "black", textShadow: "none", fontWeight:"bold"}} htmlFor="type">Pokemon: </label>
        <select name="" id="type">
         {/* onChange={e => setSelectedPokemon(e.target.value)} */}
             <option value="">-Välj Pokemon-</option>
            {pokemonList.map((pokemon, index) => (
                <option key={index} value={pokemon.name}>
                    {pokemon.name}
                </option>
            ))}
        </select>
        <button style={{color: "yellow", backgroundColor: "blue", fontSize: "10px" }} onClick={() => {}}>Visa info</button>
        
        </>
    )
}

export default PokemonApp
______________________________________________________________________

Pokemon.jsx: 

const Pokelol = () => {

    return(
        <>
        <h2>Pokemon Info</h2>
        </>
    )
}

export default Pokelol

