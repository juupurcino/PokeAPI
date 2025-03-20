import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@/components/card"
import { CardNome } from "@/components/cardNome"

export default function Home() {

  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [capturedPokemons, setCapturedPokemons] = useState<any[]>([]);
  const [pokemonColor, setPokemonColor] = useState("bg-gray-400");
  const [message, setMessage] = useState<string>("");
  const [pokemonId, setPokemonId] = useState<number>(0);
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonImage, setPokemonImage] = useState<string>("");

  useEffect(() => {
    fetchRandomPokemon();
    fetchCapturedPokemons();
  }, []);

  const fetchRandomPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1");
      const totalPokemons = response.data.count;
      const randomId = Math.floor(Math.random() * totalPokemons) + 1;

      console.log("Total: ", totalPokemons)

      const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId.toString()}`);
      setPokemonId(randomId);
      setPokemonName(pokemonResponse.data.name);
    } catch (error) {
      console.error("Erro ao buscar Pokémon aleatório:", error);
    }
  };

  const capturePokemon = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/capture", { id: pokemonId });
      setMessage(`Pokémon ${response.data.pokemon.name} capturado com sucesso!`);
      window.location.reload();
    } catch (error: any) {
      setMessage(error.response?.data?.message || "O Pokémon fugiu!");
    }
  };

  const fetchCapturedPokemons = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/team");
      setCapturedPokemons(response.data);
    } catch (error) {
      console.error("Erro ao buscar Pokémons capturados");
    }
  };

  return (
    <div className="flex flex-col items-center bg-slate-50">

      <div className="relative w-full">
        <Image
          src={require("@/assets/capa.jpg")}
          alt="Capa"
          className="h-100 w-full object-cover"
        />
        <Image
          src={require("@/assets/logo.png")}
          alt="Logo"
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/6"
        />
      </div>

      <div className="mt-28">
        <CardNome imagem={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} nome={pokemonName} ></CardNome>
      </div>

      <div className="flex justify-center items-center flex-col">
        {message && <p className="text-black text-lg font-bold">{message}</p>}
        <Image
          className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out mt-4"
          width={80}
          onClick={capturePokemon}
          src={require('@/assets/pokeball.png')}
          alt=""
        />
      </div>

      <div className="w-[80%] h-[1px]" />

      <div className="mt-5">
        <div className="flex justify-center items-center">
          <h1 className="text-white bg-amber-500 m-10 p-4 rounded-2xl font-bold text-2xl hover:bg-amber-600">My Pokemons</h1>
        </div>
        <div>
          {capturedPokemons.length > 0 ? (
            <div className="flex flex-wrap w-[100%] items-center justify-center">
              {capturedPokemons.length > 0 ? (
                capturedPokemons.map((pokemon: any) => (
                  <div key={pokemon.id}>
                    <Card imagem={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} nome={pokemon.name} specie={pokemon.species} Height={pokemon.height} Weight={pokemon.weight} type={pokemon.type} />
                  </div>
                ))
              ) : (
                <p className="text-white">Você não tem Pokémons capturados ainda.</p>
              )}
            </div>
          ) : (
            <p className="text-white">Você não tem Pokémons capturados ainda.</p>
          )}
        </div>

      </div>
    </div>
  );
}
