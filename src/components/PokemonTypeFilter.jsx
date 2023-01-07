import {
  Box,
  Text,
  Checkbox,
  CheckboxGroup,
  useCheckboxGroup,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { typeColorsTag } from "../consts/colors";
import { searchPokemon } from "../services/api";
import { LIMIT } from "../consts/api";
import { usePokemons } from "../hooks";

const PokemonTypeFilter = ({ setPokemonCount, setCurrentPage }) => {
  const { setPokemons } = usePokemons();
  const types = Object.keys(typeColorsTag);

  const BuilderOfCheckBox = ({ getCheckboxProps }) => {
    return (
      <>
        {types.map((val) => (
          <Checkbox {...getCheckboxProps({ value: val })}>
            {val[0].toUpperCase() + val.slice(1)}
          </Checkbox>
        ))}
      </>
    );
  };

  const { value, getCheckboxProps } = useCheckboxGroup();

  const OnChangeSearch = async () => {
    const listOfData = [];
    const isFiltering = value.length === 0;
    const pokemonLength = [];

    const cleanFilter = async () => {
      const data = await searchPokemon("", "1200", 0, "pokemon");
      const list = data.results.slice(0, 20);

      list.map((pokemon) => {
        listOfData.push(pokemon);
      });

      return pokemonLength.push(data.results.length);
    };

    isFiltering
      ? cleanFilter()
      : await Promise.all(
          value.map((type) => {
            (async () => {
              await searchPokemon(type, 1200, 0, "type").then((pokemons) => {
                const data = Object.values(pokemons.pokemon);
                return data.map((pokemon) => {
                  listOfData.push(pokemon.pokemon);
                });
              });
            })();
          })
        );

    setTimeout(() => {
      setPokemons(listOfData);
      setPokemonCount(isFiltering ? pokemonLength[0] : LIMIT);
      setCurrentPage(1);
    }, 300);
  };

  useEffect(() => {
    if (value.length !== 0 && value[0] === "vacio") OnChangeSearch();
  }, [value]);

  return (
    <>
      <Box>
        <Text>Transformations</Text>
        <CheckboxGroup>
          <Checkbox {...getCheckboxProps({ value: "mega" })}>
            Mega evolutions
          </Checkbox>
          <Checkbox {...getCheckboxProps({ value: "gmax" })}>Gigamax</Checkbox>
        </CheckboxGroup>
      </Box>
      <Text>Type of pokemons</Text>
      <CheckboxGroup>
        <BuilderOfCheckBox getCheckboxProps={getCheckboxProps} />
      </CheckboxGroup>
    </>
  );
};

export default PokemonTypeFilter;
