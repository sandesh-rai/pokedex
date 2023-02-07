import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemon/pokemonSlice";

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
