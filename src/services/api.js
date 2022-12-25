import { LIMIT } from "../consts/api"

export const searchPokemon = async (pokemon = "", limit = LIMIT, offSet = 0) => {
    if (pokemon !== "") {
        pokemon = "/" + pokemon
    }
    try {
        let url = `https://pokeapi.co/api/v2/pokemon${pokemon}?limit=${limit}&offset=${offSet}`
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (err) { }
}