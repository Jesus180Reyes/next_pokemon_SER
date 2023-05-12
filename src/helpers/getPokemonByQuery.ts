import { PokemonQueryInterface } from "@/interfaces/pokemon";
const getPokemonByQuery = async(pokemonName:string):Promise<PokemonQueryInterface> => {
const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
const data = await resp.json();
return data
};

export default getPokemonByQuery;