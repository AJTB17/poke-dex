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
      const data = await searchPokemon(pokemon.name, "1", 0, "pokemon");
      setPoke(data);
    })();
  }, [pokemon]);

  const selectPokemon = () => {
    setSelectedPokemon(poke);
    onClick();
  };

  const printUpperCaseName = () => {
    const mote = poke.name.split("-");
    const reOrderMote = [];
    const searchForTransformation = mote.findIndex(
      (word) => word === "mega" || word === "gmax"
    );
    const isTransform = searchForTransformation !== -1;
    const selectionArray = isTransform ? reOrderMote : mote;

    mote.map((element, index) => {
      if (element === "mega" || element === "gmax") {
        mote.splice(index, 1);

        reOrderMote.push(element);
        mote.map((elt) => reOrderMote.push(elt));
      }
    });

    const upperCaseWords = selectionArray.map(
      (word) => word[0].toUpperCase() + word.slice(1)
    );

    const joinedString = upperCaseWords.join(" ");
    return joinedString;
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
              {printUpperCaseName()}
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
