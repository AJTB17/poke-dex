import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const ImgUrl =
    "https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png";

  return (
    <Flex
      background="rgb(50, 50, 50)"
      color="white"
      height="100px"
      flex-direction="row"
      justify-content="space-evenly"
      align-items="center"
    >
      <Box margin="auto" />
      <Flex margin="auto" justifyContent="space-around">
        <img
          src={ImgUrl}
          alt="pokeAPI-logo"
          className="navbar-img"
          width="135px"
        />
      </Flex>
      <Box margin="auto" fontSize="25px">
        ❤
      </Box>
    </Flex>
  );
};

export default Navbar;
