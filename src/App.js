import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

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
    <div className="bg-red-500 h-screen">
      <h1>Welcome to React Router!</h1>
      <p>{JSON.stringify(pokemonData)}</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </>
  );
}

export default App;
