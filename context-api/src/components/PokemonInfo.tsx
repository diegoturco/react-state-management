import React, { useContext } from "react";
import PokemonContext from "../context/PokemonContext";
import { PokemonBaseType } from "../types/PokemonType";

const PokemonInfo = () => {
  const { selectedPokemon } = useContext(PokemonContext);

  return selectedPokemon?.name ? (
    <div>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key as keyof PokemonBaseType]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default PokemonInfo;
