import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    allPokemon: [],
    selectedPokemonData: {},
  },
  reducers: {
    setAllPokemon: (state, action) => {
      state.allPokemonList = [...action.payload];
    },
    setSelectedPokemonData: (state, action) => {
      // console.log(action.payload);
      state.selectedPokemonData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllPokemon, setSelectedPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
