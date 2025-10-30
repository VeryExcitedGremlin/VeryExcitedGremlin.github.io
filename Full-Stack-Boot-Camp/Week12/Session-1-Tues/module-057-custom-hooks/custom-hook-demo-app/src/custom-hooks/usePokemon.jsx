import { useEffect, useState } from "react";
export default function usePokemon(pokemonName = "ditto") {
  const [pokemon, setPokemon] = useState({});

  // Using API calls
  // useEffect
  useEffect(() => {
    //async
    async function fetchPokemon() {
      try {
        // to do the fetch call
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        // check if the response returned ok result
        if (!response.ok) {
          throw new Error("failed to fetch pokemon");
        }

        const data = await response.json();

        setPokemon(data);

        console.log("Pokemon data", data);
      } catch (err) {
        console.log("You got an error: " + err);
      }
    }

    fetchPokemon();
  }, [pokemonName]); //Empty array to have this run once

  // could return using values Pattern or use any data type that
  // you want to return
  // { data, loading, error }
  // in this instance just return back the pokemon object
  return pokemon;
}
