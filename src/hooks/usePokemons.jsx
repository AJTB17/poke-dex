import { useContext } from "react"
import { PokemonContext } from "../contexts/PokemonContext"

const usePokemons = () => {
  return useContext(PokemonContext)
}

export default usePokemons