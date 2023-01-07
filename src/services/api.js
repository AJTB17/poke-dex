import { LIMIT } from "../consts/api";

export const searchPokemon = async (
  element = "",
  limit = LIMIT,
  offSet = 0,
  typeOfSearch = "pokemon"
) => {
  if (element !== "") element = "/" + element;

  try {
    let url = `https://pokeapi.co/api/v2/${typeOfSearch}${element}?limit=${limit}&offset=${offSet}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};
