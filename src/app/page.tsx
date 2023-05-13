import 'animate.css';
import Pokemon  from '@/components/Pokemon';
import { getPokemons } from '@/helpers/getPokemons';
import connectDB from '@/db/db';


const HomePage = async() => {
  await connectDB();
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
