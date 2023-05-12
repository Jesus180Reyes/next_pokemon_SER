import React, { FC } from 'react'
import Image from 'next/image'
import { PokemonResponse } from '../interfaces/pokemonResponse';
import { PokemonQueryInterface } from '@/interfaces/pokemon';
import { OnClickButton } from './OnClickButton';
interface Props {
    pokemon:PokemonResponse,
}
const Pokemon:FC<Props> = ({pokemon}) => {
   
  return (
    <>
     <div className='pokemons-container animate__animated animate__fadeIn'>
    {
     pokemon.results.map(async(pokemon) => {
      const pokemonImage = await fetch(pokemon.url);
      const dataImage:PokemonQueryInterface = await pokemonImage.json();
    const pokemonName =   pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
      return <>
      <div  key={pokemon.name} className='pokemon-card'>
        <p key={pokemon.name}>{pokemonName}</p>
        <Image src={dataImage.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
        <OnClickButton pokemonName={pokemon.name}/>
        </div>
      </>
     })
    }
    </div>
    </>
  )
}

export default Pokemon;
