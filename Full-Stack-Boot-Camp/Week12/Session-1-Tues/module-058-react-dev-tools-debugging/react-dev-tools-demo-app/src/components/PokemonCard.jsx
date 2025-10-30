import { useEffect, useState } from "react";
import usePokemon from "../custom-hooks/usePokemon";

export default function PokemonCard({ pokemonName = "ditto" }) {
  const pokemon = usePokemon(pokemonName);

  return (
    <>
      <h2>Name: {pokemon.name}</h2>
      <p>Height: {pokemon.height}</p>
      <p>Id: {pokemon.id}</p>
    </>
  );
}
