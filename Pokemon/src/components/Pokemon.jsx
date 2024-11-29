import React from "react";
import { useState, useEffect } from "react";

function PokemonInfo ({ pokemon }) {

    const [types, setTypes] = useState([])

    useEffect(() => {

     if (pokemon && pokemon.types) {
            const typAvPokemon = pokemon.types.map(typ => typ.type.name)
            setTypes(typAvPokemon)
        }
    }
    , [pokemon])

    if (!pokemon) {
        return (null)
    }

    return (
      <>
        
        <div>
          <h1 style={{fontSize: "65px"}}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{width: "200px", height: "200px"}}/>
          <img src={pokemon.sprites.back_default} alt={pokemon.name} style={{width: "200px", height: "200px"}}/>
        </div>

        <div style={{backgroundColor: "#6db2c9a9", borderRadius: "100px", border: "9px solid #ffd900cf" }}>
          <h2 style={{color: "blue"}}>Övrig Info:</h2>

          <h4>Vikt i hektogram: {pokemon.weight}</h4>
          <h4>Längd i decimeter: {pokemon.height}</h4>
          <h4>Typ av Pokemon:</h4>
             {types.map((type, index) => (
              <h4 style={{listStyle: "none"}} key={index}>
                {type.charAt(0).toUpperCase() + type.slice(1)} </h4>
                )
               )
             }
        </div>
      </>
    )
}

export default PokemonInfo