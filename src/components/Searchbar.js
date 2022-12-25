import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { searchPokemon } from "../services/api";

const SearchBar = ({ setPokemon, setPokemonCount }) => {
  const [value, setValue] = useState("");

  const onChange = async (evt) => {
    const newValue = evt.target.value;
    setValue(newValue);
    const data = await searchPokemon("", "1200");
    const filterSearch = data.results.filter((pokemon) =>
      pokemon.name.startsWith(newValue)
    );
    setPokemon(filterSearch);
    setPokemonCount(filterSearch.length);
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
