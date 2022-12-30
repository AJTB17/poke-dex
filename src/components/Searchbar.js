import { useState } from "react";
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

  const onChange = async (evt) => {
    const newValue = evt.target.value;
    const data = await searchPokemon("", "1200");
    setValue(newValue);

    const isEmpty = newValue === "";
    setSearchStatus(!isEmpty);
    const filterSearch = isEmpty
      ? data.results
      : data.results.filter((pokemon) => pokemon.name.startsWith(newValue));
    setPokemon(filterSearch);
    setPokemonCount(isEmpty ? data.results.length : LIMIT);

    setCurrentPage(1);
  };

  return (
    <div>
      <div>
        <Input
          variant="flushed"
          placeholder="Buscar pokemon..."
          onChange={onChange}
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
