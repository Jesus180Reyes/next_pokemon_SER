import { PokemonResponse } from "@/interfaces/pokemonResponse";

export const getPokemons = async() => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
    const data:PokemonResponse = await resp.json();
    return {data}
  };


