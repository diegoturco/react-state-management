import React from "react";
import { Button } from "@mui/material";
import { PokemonType } from "../types/PokemonType";

type PokemonRowType = {
  pokemon: PokemonType
  onClick: (pokemon: PokemonType) => void
}

const PokemonRow = ({ pokemon, onClick }: PokemonRowType) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick(pokemon)}
        >
          More Information
        </Button>
      </td>
    </tr>
  </>
);

export default PokemonRow;
