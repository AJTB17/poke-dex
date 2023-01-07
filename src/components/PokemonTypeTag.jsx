import { typeColorsTag } from "../consts/colors";
import { Tag } from "@chakra-ui/react";

const PokemonTypeTag = ({ poke, size }) => {
  return (
    <>
      {poke.types.map((type, index) => {
        const { name } = type.type;
        return (
          <Tag
            marginLeft="2.5px"
            variant="solid"
            size={size}
            key={index}
            colorScheme={typeColorsTag[name]}
          >
            {name}
          </Tag>
        );
      })}
    </>
  );
};

export default PokemonTypeTag;
