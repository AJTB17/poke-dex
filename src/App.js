import './App.css';
import Navbar from './components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import PokeList from './components/PokeList';
import PokemonProvider from './contexts/PokemonContext';

function App() {
  return (
    <PokemonProvider>
      <ChakraProvider>
        <div >
          <Navbar/>
          <div className="App">
            <PokeList />
          </div>
        </div>
      </ChakraProvider>
    </PokemonProvider>
  );
}

export default App;
