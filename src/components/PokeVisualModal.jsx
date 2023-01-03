import { useState } from "react";
import {
  Image,
  Flex,
  Box,
  Text,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
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
import PokemonCharts from "./PokemonCharts";
import { typeColors } from "../consts/colors";

const PokeVisualModal = () => {
  const { onClose, isOpen, selectedPokemon } = useModal();
  const cardSprite =
    selectedPokemon && Object.values(selectedPokemon.sprites).slice(0, 8);

  // ---------------------------------------------- Overlay stuff ----------------------------------------------
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.600"
      backdropFilter="blur(7.5px) hue-rotate(270deg)"
    />
  );
  // -----------------------------------------------------------------------------------------------------------

  const getBackgroundTypeColor = () => {
    return typeColors[selectedPokemon.types[0].type.name];
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
            <Box width="40%">
              <Box>
                <Image
                  width="80%"
                  src={selectedPokemon.sprites.front_default}
                />
              </Box>
              <Box>
                <Text fontSize="3xl">Sprites</Text>
                <Flex
                  justifyContent="space-around"
                  border="1px solid rgb(175,175,175)"
                  borderRadius="10px"
                  marginTop="10px"
                >
                  {cardSprite.map((cardImg, index) => {
                    if (cardImg !== null)
                      return (
                        <Image
                          width={`${100 / cardSprite.length}%`}
                          src={cardImg}
                          key={index}
                        />
                      );
                  })}
                </Flex>
              </Box>
            </Box>
            <Box width="40%">
              <Card
                width="100%"
                margin="10px"
                background={getBackgroundTypeColor}
                height="50vh"
              >
                <CardBody color="white" display="flex">
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
                      const { isHidden } = ability;
                      const title = isHidden ? "Hidden ability" : "Ability";
                      return (
                        <Box>
                          <Text fontSize="2xl">{title}</Text>
                          <Text fontSize="xl" color="black">
                            {ability.ability.name}
                          </Text>
                        </Box>
                      );
                    })}
                  </Box>
                  <Card background="white" height="100%" width="60%">
                    <CardHeader>
                      <Text fontSize="3xl" align="center" marginBottom="0">
                        Base stats
                      </Text>
                    </CardHeader>
                    <CardBody>
                      <PokemonCharts selectedPokemon={selectedPokemon} />
                    </CardBody>
                  </Card>
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
