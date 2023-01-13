import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    allPokemonList: [],
  },
  reducers: {
    setPokemonList: (state, action) => {
      state.allPokemonList = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokemonList } = pokemonSlice.actions;

export default pokemonSlice.reducer;
