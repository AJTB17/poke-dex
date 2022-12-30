import "./App.css";
import Navbar from "./components/Navbar";
import { Box, ChakraProvider } from "@chakra-ui/react";
import PokeList from "./components/PokeList";
import PokemonProvider from "./contexts/PokemonContext";
import PokeVisualModal from "./components/PokeVisualModal";
import ModalProvider from "./contexts/ModalContext";

function App() {
  return (
    <PokemonProvider>
      <ChakraProvider>
        <Box>
          <Navbar />
          <Box className="App">
            <ModalProvider>
              <PokeList />
              <PokeVisualModal />
            </ModalProvider>
          </Box>
        </Box>
      </ChakraProvider>
    </PokemonProvider>
  );
}

export default App;
