import { useState } from "react";
import { Flex, Box, Text, Card, CardBody } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useModal } from "../hooks";
import { typeColorsBackground } from "../consts/colors";
import SpritesBox from "./SpritesBox";
import DataBox from "./DataBox";
import StatsBox from "./StatsBox";

const PokeVisualModal = () => {
  const { onClose, isOpen, selectedPokemon } = useModal();

  // ---------------------------------------------- Overlay stuff ----------------------------------------------
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.600"
      backdropFilter="blur(7.5px) hue-rotate(270deg)"
    />
  );
  // -----------------------------------------------------------------------------------------------------------

  const getBackgroundTypeColor = () => {
    const typesColors = selectedPokemon.types;
    const pokemonType = [];

    typesColors.map((type) => {
      pokemonType.push(typeColorsBackground[type.type.name]);
    });

    const isTwoTypes = pokemonType.length > 1;
    const defineTypeOfBackground = isTwoTypes
      ? `linear-gradient(135deg, ${pokemonType[0]} 0%, ${pokemonType[1]} 100%)`
      : pokemonType[0];

    return defineTypeOfBackground;
  };

  const [overlay] = useState(<OverlayOne />);
  const PokemonCardData = () => {
    return (
      <>
        <ModalHeader background="black" color="white">
          <Text marginLeft="10%" fontSize="4xl">
            {selectedPokemon.name} N.º {selectedPokemon.id}
          </Text>
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <Flex justifyContent="center">
            <SpritesBox />
            <Box width="40%">
              <Card
                width="100%"
                margin="10px"
                background={getBackgroundTypeColor()}
                height="50vh"
              >
                <CardBody color="white" display="flex">
                  <DataBox />
                  <StatsBox />
                </CardBody>
              </Card>
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </>
    );
  };

  return (
    <>
      <Modal
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
        size={"full"}
        useInert={false}
      >
        {overlay}
        <ModalContent>{selectedPokemon && <PokemonCardData />}</ModalContent>
      </Modal>
    </>
  );
};

export default PokeVisualModal;
