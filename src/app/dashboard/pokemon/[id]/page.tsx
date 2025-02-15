interface Props {
    params:{ id : string;}
}

const getPokemon = async (id: string ) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await fetch(url,{cache:"force-cache"}).then(res => res.json())
    console.log('pokemon', pokemon)
}

export default function PokemonPage({params}:Props) {

    const id = params.id;

    const pokemon = getPokemon(id);

    return (
    <div>
      <h1>Hello PokemonPage</h1>
    </div>
  );
}