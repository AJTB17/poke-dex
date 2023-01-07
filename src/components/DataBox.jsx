import { Box, Text } from "@chakra-ui/react";
import { useModal } from "../hooks";
import PokemonTypeTag from "./PokemonTypeTag";

const DataBox = () => {
  const { selectedPokemon } = useModal();

  return (
    <Box width="40%">
      <Box>
        <Text fontSize="2xl">Height</Text>
        <Text fontSize="xl" color="black">
          {selectedPokemon.height} m
        </Text>
      </Box>
      <Box>
        <Text fontSize="2xl">Weight</Text>
        <Text fontSize="xl" color="black">
          {selectedPokemon.weight} kg
        </Text>
      </Box>
      {selectedPokemon.abilities.map((ability) => {
        const { is_hidden } = ability;
        const title = is_hidden ? "Hidden ability" : "Ability";
        return (
          <Box>
            <Text fontSize="2xl">{title}</Text>
            <Text fontSize="xl" color="black">
              {ability.ability.name.replace("-", " ")}
            </Text>
          </Box>
        );
      })}
      <Box marginTop="10px">
        <PokemonTypeTag poke={selectedPokemon} size="lg" />
      </Box>
    </Box>
  );
};

export default DataBox;
