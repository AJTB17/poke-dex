import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import PokemonCard from "./PokemonCard";
import { searchPokemon } from "../services/api";
import { Flex, Box } from "@chakra-ui/react";
import { usePokemons, useModal } from "../hooks";
import { LIMIT } from "../consts/api";
import PageControl from "./PageControl";
import { Select } from "@chakra-ui/react";

const PokeList = () => {
  const { pokemons, setPokemons } = usePokemons();
  const { onOpen } = useModal();

  const [pokemonCount, setPokemonCount] = useState(LIMIT);
  const [searchStatus, setSearchStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("Filter");

  const filterForm = (evt) => setFilter(evt.target.value);

  useEffect(() => {
    (async () => {
      const data = await searchPokemon();
      setPokemons(data.results);
      setPokemonCount(data.count);
    })();
  }, [setPokemons, setPokemonCount]);

  return (
    <>
      <SearchBar
        setPokemon={setPokemons}
        setPokemonCount={setPokemonCount}
        setSearchStatus={setSearchStatus}
        searchStatus={searchStatus}
        setCurrentPage={setCurrentPage}
        filter={filter}
      />
      <Box>
        <Select placeholder="Filter" variant="flushed" onChange={filterForm}>
          <option value="-mega">Mega evolution</option>
          <option value="-gmax">Dinamax</option>
        </Select>
      </Box>
      <Flex
        alignItems={"center"}
        justify={"space-between"}
        width={"100vw"}
        alignContent={"center"}
      >
        <Box />
        <Flex align={"center"} flexWrap={"wrap"} width={"80%"} margin={"auto"}>
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <PokemonCard key={index} pokemon={pokemon} onClick={onOpen} />
            ))}
        </Flex>
        <Box />
      </Flex>
      <PageControl
        pokemonCount={pokemonCount}
        searchStatus={searchStatus}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default PokeList;
