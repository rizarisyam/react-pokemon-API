import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    console.log("test");
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-green-400 shadow rounded-lg border border-b flex flex-col py-4">
      <div className="w-full flex justify-between items-center px-4">
        <div className="flex justify-between w-auto">
          <Link to="/">
            <h2>LOGO</h2>
          </Link>

          <div className="mx-8 hidden lg:block">
            <Link className="mr-2" to="/pokemon">
              Pokemon
            </Link>
            {/* <a href="#" className="mr-2">
              Pokemon List
            </a> */}
            <a href="#" className="mr-2">
              Pokemon Detail
            </a>
            <a href="#" className="mr-2">
              My Pokemon
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={isOpenHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col px-2">
          <Link to="/home"></Link>
          <Link className="px-2" to="/pokemon">
            Pokemon
          </Link>
          {/* 
            <a
              href="#"
              className="px-2 py-1 my-1 rounded hover:bg-gray-400 hover:text-white"
            >
              Pokemon Detail
            </a>
            <a
              href="#"
              className="px-2 py-1 my-1 rounded hover:bg-gray-400 hover:text-white"
            >
              My Pokemon
            </a>
            <a
              href="#"
              className="px-2 py-1 my-1 rounded hover:bg-gray-400 hover:text-white"
            >
              Test
            </a> */}
        </div>
      )}
    </header>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>{/* <Link to="/about">About</Link> */}</nav>
    </>
  );
}

export default Navbar;
