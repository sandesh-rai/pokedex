import { createSlice } from "@reduxjs/toolkit";
import { AllPokemon, SelectedPokemon } from "../../types";

// Define a type for the slice state
interface PokemonState {
  allPokemon: AllPokemon;
  selectedPokemon: SelectedPokemon;
}

const initialState: PokemonState = {
  allPokemon: [] as AllPokemon,
  selectedPokemon: {} as SelectedPokemon,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setAllPokemon: (state, action) => {
      state.allPokemon = [...action.payload];
    },
    setSelectedPokemonData: (state, action) => {
      state.selectedPokemon = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllPokemon, setSelectedPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
