import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    allPokemon: [],
    selectedPokemon: {},
  },
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
