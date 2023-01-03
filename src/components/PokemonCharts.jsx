import {
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { typeColors } from "../consts/colors";

const PokemonCharts = ({ selectedPokemon }) => {
  const PokemonData = Object.values(selectedPokemon);
  const data = [];

  PokemonData[15].map((stats) => {
    const val = new Object();
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
    return typeColors[PokemonData[16][0].type.name];
  };

  return (
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
  );
};

export default PokemonCharts;
