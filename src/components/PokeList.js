import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import PokemonCard from "./PokemonCard";
import { searchPokemon } from "../services/api";
import { Flex, Box } from "@chakra-ui/react";
import usePokemons from "../hooks/usePokemons";
import { LIMIT } from "../consts/api";
import PageControl from "./PageControl";

const PokeList = () => {
  const { pokemons, setPokemons } = usePokemons();
  const [pokemonCount, setPokemonCount] = useState(LIMIT);

  useEffect(() => {
    (async () => {
      const data = await searchPokemon();
      setPokemons(data.results);
      setPokemonCount(data.count);
    })();
  }, []);

  return (
    <>
      <SearchBar setPokemon={setPokemons} setPokemonCount={setPokemonCount} />
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
              <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </Flex>
        <Box />
      </Flex>
      <PageControl pokemonCount={pokemonCount} />
    </>
  );
};

export default PokeList;