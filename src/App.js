import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import PokemonList from "./views/PokemonList";

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        {/* <Route path="/pokemon/show" element={<Home />} />
        <Route path="/my-pokemon" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
