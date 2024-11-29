import { useState } from "react"
import PokemonInfo from "./Pokemon"


function PokemonApp ({pokemonList}) {

  const [selectedPokemon, setSelectedPokemon] = useState ("")
  const [info, setInfo] = useState(null)


  const getInfo = async () => {
    if (selectedPokemon) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}/`)
        let json = await response.json()
        setInfo(json)
    }
  }

    return (
        <>
        <h1 style={{fontSize: "60px", color: "lightpink",
                    textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
        }}>POKEMON APPLICATION</h1>

        <h2 style={{color:"lightpink", 
                    textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
        }}>Välj din Pokemon för att se dess info</h2>
    
        <label style={{color:"lightpink", 
                    textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}} 
                    htmlFor="type">Pokemon: </label>

        <select name="" id="type" onChange={e => setSelectedPokemon(e.target.value)}>
             <option value="">-Välj Pokemon-</option>

            {pokemonList.map((pokemon, index) => 
            (
                <option key={index} value={pokemon.name}>
                   {pokemon.name}
                </option>
            )
            )}
        </select>

        <button style={{color: "yellow", backgroundColor: "blue", fontSize: "12px"}} 
                onClick={getInfo}>Visa info</button>
        <PokemonInfo pokemon={info} />
        
        </>
    )
}

export default PokemonApp