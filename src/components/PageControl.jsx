import { Flex, Box, Button } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { LIMIT } from "../consts/api";
import usePokemons from "../hooks/usePokemons";
import { searchPokemon } from "../services/api";
import { useState } from "react";

const PageControl = ({ pokemonCount }) => {
  const { setPokemons } = usePokemons()
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.floor(pokemonCount / LIMIT)
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const forward = async () => {
    const cantItem = currentPage * LIMIT;
    const { results } = await searchPokemon("", "", cantItem);
  
    setCurrentPage((current) => current + 1);
    return setPokemons(results);
  };
  const back = async () => {
    const cantItem = (currentPage - 2) * LIMIT;
    const { results } = await searchPokemon("", "", cantItem);

    setCurrentPage((current) => current - 1);
    return setPokemons(results);
  };

  return(
    <Flex justifyContent={"center"} margin={"10px 0"}>
      <Button
        colorScheme="blue"
        onClick={back}
        id="back"
        disabled={isFirstPage}
      >
        <ArrowBackIcon />
      </Button>
      <Box margin={"0 15px"} alignSelf={"center"} fontSize={"1.3em"} id="pag">
        {currentPage}/{lastPage}
      </Box>
      <Button
        colorScheme="blue"
        onClick={forward}
        id="next"
        disabled={isLastPage}
      >
        <ArrowForwardIcon />
      </Button>
    </Flex>
  )
}

export default PageControl