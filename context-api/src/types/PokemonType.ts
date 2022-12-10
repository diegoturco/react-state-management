export type PokemonType = {
  id: number;
  name: PokemonNameType;
  type: string[];
  base: PokemonBaseType;
};

export type PokemonNameType = {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
};

export type PokemonBaseType = {
  HP: number;
  Attack: number;
  Defense: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
};
