import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import PokemonContext from './context/PokemonContext';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonInfo from './components/PokemonInfo';
import { CssBaseline } from '@mui/material';
import pokemonData from './data/pokemon.json'
import { PokemonType } from "./types/PokemonType";

const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

function App() {
  const [filter, filterSet] = React.useState<string>('');
  const [pokemon, pokemonSet] = React.useState<PokemonType[]>(pokemonData);
  const [selectedPokemon, selectedPokemonSet] = React.useState<PokemonType>({} as PokemonType);

  return (
    <PokemonContext.Provider
      value={{
        filter,        
        filterSet,
        pokemon,
        pokemonSet,
        selectedPokemon,
        selectedPokemonSet,
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
