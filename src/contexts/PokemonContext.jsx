import { createContext, useState } from "react";

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState()

  const data = {
    pokemons,
    setPokemons
  }

  return <PokemonContext.Provider value={data}>{children}</PokemonContext.Provider>;
}

export default PokemonProvider