import { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Navbar from "../componets/UI/Navbar";
import Spinner from "../componets/UI/Spinner";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const duration = Math.floor(Math.random() * 5 + 1) * 1000;

  useEffect(() => {
    setTimeout(() => {
      fetchPokemon();
    }, duration);
  }, []);

  const fetchPokemon = async () => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setPokemon(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      {/* {typeof pokemon.results} */}
      {isLoading && <Spinner></Spinner>}
      {!isLoading && !error && (
        <div className="overflow-x-auto">{JSON.stringify(pokemon.results)}</div>
      )}
      {/* <div className="grid grid-rows-4 grid-flow-col gap-4">
        {pokemon.results.map((item, i) => {
          return (
            <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default PokemonList;
