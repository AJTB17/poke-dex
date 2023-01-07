import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useModal } from "../hooks";
import { useState } from "react";

const SpritesBox = () => {
  const { selectedPokemon } = useModal();
  const [principalSprite, setPrincipalSprite] = useState(
    selectedPokemon.sprites.front_default
  );
  const [psName, setPSName] = useState("front default");
  const cardSprite =
    selectedPokemon && Object.entries(selectedPokemon.sprites).slice(0, 8);

  const changeSprite = (evt) => {
    const img = evt.target.src;
    const name = evt.target.getAttribute("value");
    const cleanName = name.replace("_", " ");

    setPSName(cleanName);
    setPrincipalSprite(img);
  };

  return (
    <Box width="40%">
      <Box>
        <Image width="80%" src={principalSprite} />
      </Box>
      <Box>
        <Text fontSize="3xl">Sprite {psName}</Text>
        <Flex
          justifyContent="space-around"
          border="1px solid rgb(175,175,175)"
          borderRadius="10px"
          marginTop="10px"
        >
          {cardSprite.map((cardImg, index) => {
            if (cardImg[1] !== null)
              return (
                <Image
                  width={`${100 / cardSprite.length}%`}
                  src={cardImg[1]}
                  key={index}
                  onClick={changeSprite}
                  value={cardImg[0]}
                />
              );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default SpritesBox;
