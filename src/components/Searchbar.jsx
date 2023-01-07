import { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { searchPokemon } from "../services/api";
import { LIMIT } from "../consts/api";

const SearchBar = ({
  setPokemon,
  setPokemonCount,
  setSearchStatus,
  setCurrentPage,
}) => {
  const [value, setValue] = useState("");

  const onChangeSearch = async () => {
    const data = await searchPokemon("", "1200");

    const isEmpty = value === "";
    setSearchStatus(!isEmpty);
    const filterSearch = isEmpty
      ? data.results.slice(0, 20)
      : data.results.filter((pokemon) =>
          pokemon.name.startsWith(value.toLowerCase())
        );
    setPokemon(filterSearch);
    setPokemonCount(isEmpty ? data.results.length : LIMIT);

    setCurrentPage(1);
  };

  useEffect(() => {
    const timeOutId = setTimeout(onChangeSearch, 500);
    return () => clearTimeout(timeOutId);
  }, [value]);

  return (
    <div>
      <div>
        <Input
          variant="flushed"
          placeholder="Buscar pokemon..."
          onChange={(evt) => setValue(evt.target.value)}
          size="lg"
          height="100px"
          padding="0 10px"
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchBar;
