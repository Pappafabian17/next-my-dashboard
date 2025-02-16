import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";
import { title } from "process";

export const metadata = {
  title: "Lista de pokemons",
  description: "En esta pagina se muestra el listado de pokemons",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const data = await fetch(url);
  const response: PokemonResponse = await data.json();

  const pokemons = response.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="felx flex-col">
      <span className="text-5xl my-2">
        Listado de pokemons <small>estatico </small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
