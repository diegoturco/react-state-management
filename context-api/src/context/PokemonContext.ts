import React from "react";
import { PokemonType } from "../types/PokemonType";

type PokemonContextType = {
  filter: string;
  filterSet: (value: string ) => void;
  pokemon: PokemonType[];
  pokemonSet: (value: PokemonType[]) => void;
  selectedPokemon: PokemonType | undefined;
  selectedPokemonSet: (value: PokemonType) => void;
};

const PokemonContext = React.createContext<PokemonContextType>({} as PokemonContextType);

export default PokemonContext;
