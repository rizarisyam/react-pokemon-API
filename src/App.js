import { useState, useEffect } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await response.json();
      console.log(data);
      setPokemonData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p className="">{JSON.stringify(pokemonData.data)}</p>
    </div>
  );
}

export default App;
