import React from "react";
import { Card, CardBody, Image, Heading, Box, Flex } from "@chakra-ui/react";
import { searchPokemon } from "../../services/api";
import { useState, useEffect } from "react";
import { useModal } from "../../hooks";
import PokemonTypeTag from "../PokemonTypeTag";

const PokemonCard = ({ pokemon, onClick }) => {
  const [poke, setPoke] = useState();
  const { setSelectedPokemon } = useModal();

  useEffect(() => {
    (async () => {
      const data = await searchPokemon(pokemon.name);
      setPoke(data);
    })();
  }, [pokemon]);

  const selectPokemon = () => {
    setSelectedPokemon(poke);
    onClick();
  };
  return (
    <Box
      margin={"10px"}
      width={"calc(20% - 20px)"}
      onClick={selectPokemon}
      cursor="pointer"
    >
      {poke && (
        <Card
          size="sm"
          display={"flex"}
          flexDirection={"row"}
          height={"275px"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <CardBody margin={"auto"}>
            <Image
              src={poke.sprites.front_default}
              alt={poke.name}
              borderRadius="lg"
              width={"60%"}
              margin={"auto"}
            />
            <Heading size="md" textAlign={"center"}>
              {poke.name}
            </Heading>
            <Flex justifyContent={"center"}>
              <PokemonTypeTag poke={poke} size="md" />
            </Flex>
          </CardBody>
        </Card>
      )}
    </Box>
  );
};

export default PokemonCard;
