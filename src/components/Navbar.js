import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const searchRef = useRef();
  const navigate = useNavigate();

  function handleSearchClick() {
    navigate(`/items?search=${searchRef.current.value}`);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  }

  return (
    <header className="bg-mercadolibre py-1">
      <div className="container mx-auto flex items-center">
        <Link to="/">
          <img
            src="/img/mercadito.png"
            className="h-[40px] w-[98px] mx-2 my-2"
            alt="Logo"
          />
        </Link>
        <div className="flex w-full ml-9 mr-10">
          <input
            id="search"
            name="search"
            ref={searchRef}
            placeholder="Nunca dejes de buscar"
            className="w-full bg-white p-2 px- rounded-l-lg"
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-white p-4 border-l-neutral-300 border-l-2"
            onClick={handleSearchClick}
          >
            <FaSearch />
          </button>
        </div>

        <img
          className=" justify-end w-16 md:w-60 lg:w-96"
          src="https://http2.mlstatic.com/D_NQ_663552-MLA49878679172_052022-OO.webp"
          alt=""
        />
      </div>
    </header>
  );
}
