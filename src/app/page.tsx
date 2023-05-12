import 'animate.css';
import Pokemon  from '@/components/Pokemon';
import { getPokemons } from '@/helpers/getPokemons';


const HomePage = async() => {
  const {data:pokemon} = await getPokemons();

  return (
    <main>
    <h1>Home Page</h1>
    <hr />
   <Pokemon pokemon={pokemon}/>
    </main>
  )
}

export default HomePage;
