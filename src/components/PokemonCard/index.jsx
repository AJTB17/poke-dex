import React from "react";
import { Card, CardBody, Image, Heading, Flex, Box } from '@chakra-ui/react'
import { Tag } from '@chakra-ui/react'
import { searchPokemon } from "../../services/api";
import { useState, useEffect } from "react";

const typeColors = {
	grass: "green",
	normal: "gray",
	fire: "red",
	water: "blue",
	flying: "teal",
	fighting: "orange",
	poison: "pink",
	electric: "yellow",
	ground: "orange",
	rock: "orange",
	psychic: "pink",
	ice: "cyan",
	bug: "green",
	ghost: "purple",
	steel: "gray",
	dragon: "Blue",
	dark: "black",
	fairy: "pink"
}

const PokemonCard = ({ pokemon }) => {
	const [poke, setPoke] = useState()

	useEffect(() => {
		(async () => {
			const data = await searchPokemon(pokemon.name)
			setPoke(data)
		})()
	}, [pokemon])

	return (
		<Box margin={"10px"} width={'calc(20% - 20px)'}>
			{
				poke &&
				<Card size='sm' display={'flex'} flexDirection={'row'} height={'275px'} alignItems={"center"} justifyContent={'space-around'}>
					<CardBody margin={'auto'}>
						<Image
							src={poke.sprites.front_default}
							alt={poke.name}
							borderRadius='lg'
							width={'60%'}
							margin={"auto"}
						/>
						<Heading size='md' textAlign={'center'}>{poke.name}</Heading>
						<Flex justifyContent={'center'}>
							{
								poke.types.map((type, index) => {
									const { name } = type.type
									return <Tag variant='solid' key={index} colorScheme={typeColors[name]}>{name}</Tag>
								})
							}
						</Flex>
					</CardBody>
				</Card>
			}
		</Box >
	)
}

export default PokemonCard 