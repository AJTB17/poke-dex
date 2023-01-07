import { Card, CardHeader, CardBody, Text } from "@chakra-ui/react";
import {
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { typeColorsBackground } from "../consts/colors";
import { useModal } from "../hooks";

const StatsBox = () => {
  const { selectedPokemon } = useModal();
  const PokemonData = Object.values(selectedPokemon);
  const data = [];

  PokemonData[15].map((stats) => {
    const val = {};
    if (stats.stat.name === "hp") val.subject = "HP";
    if (stats.stat.name === "attack") val.subject = "Attack";
    if (stats.stat.name === "defense") val.subject = "Defense";
    if (stats.stat.name === "special-attack") val.subject = "Sp. Attack";
    if (stats.stat.name === "special-defense") val.subject = "Sp. Defense";
    if (stats.stat.name === "speed") val.subject = "Speed";
    val.A = stats.base_stat;

    return data.push(val);
  });

  const getBackgroundTypeColor = () => {
    return typeColorsBackground[PokemonData[16][0].type.name];
  };

  return (
    <Card background="white" height="100%" width="60%">
      <CardHeader>
        <Text fontSize="3xl" align="center" marginBottom="0">
          Base stats
        </Text>
      </CardHeader>
      <CardBody>
        <ResponsiveContainer>
          <RadarChart outerRadius={175} width="100%" height="auto" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} domain={[0, 256]} color="red" />
            <Radar
              name="Base Stats"
              dataKey="A"
              stroke={getBackgroundTypeColor()}
              fill={getBackgroundTypeColor()}
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

export default StatsBox;
