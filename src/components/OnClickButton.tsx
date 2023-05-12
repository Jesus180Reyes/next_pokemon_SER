"use client"
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'
interface Props {
    pokemonName: string
}
export const OnClickButton:FC<Props> = ({pokemonName}) => {
    const router = useRouter();
   
    const onHandleClick  = (name:string) => {
          router.push(`/pokemon/${name}`);
    }
  return (
    <>
    <button onClick={()=>onHandleClick(pokemonName)}>Ver mas</button>
    </>
  )
}
