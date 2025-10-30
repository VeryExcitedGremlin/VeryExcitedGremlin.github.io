import PokemonCard from "./PokemonCard";
import { useState } from "react";

export default function PokemonSelector() {
  const [pokemonName, setPokemonName] = useState("charmander");

  const pokemonOptions = [
    { id: 4, name: "charmander" },
    { id: 25, name: "pikachu" },
    { id: 132, name: "ditto" },
  ];
  return (
    <>
      <label>Choose a pokemon:</label>

      <select
        name="pokemon-select"
        id="pokemon-select"
        onChange={(e) => {
          setPokemonName(e.target.value);
        }}
      >
        {pokemonOptions.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>

      <PokemonCard pokemonName={pokemonName} />
    </>
  );
}
