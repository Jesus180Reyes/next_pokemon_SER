import Image from 'next/image';
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import  getPokemonByQuery  from '@/helpers/getPokemonByQuery';

export  const PokemonPage = async({params}:Params) => {
  const pokemon  = await getPokemonByQuery(params.id);
  return (
    <>
    <div className="query-pokemon-container">
    <div  key={pokemon.name} className='pokemon-card'>
        <p key={pokemon.species.name}>{pokemon.species.name}</p>
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
        <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}/>
        <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
        </div>
    </div>
    </>
  )
}

export default PokemonPage;
