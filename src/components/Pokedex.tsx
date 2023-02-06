import React, { FC, useEffect } from "react";
import styles from "./Pokedex.module.css";
import PokedexHinge from "./PokedexHinge";
import { LeftPanel } from "./LeftPanel";
import RightPanel from "./RightPanel";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setAllPokemon,
  setSelectedPokemonData,
} from "../features/pokemon/pokemonSlice";

export const Pokedex: FC = () => {
  const dispatch = useDispatch();

  // Call PokeAPI to initialise Pokemon data
  useEffect(() => {
    let initialisePokemonData = async () => {
      // Get and store all pokemon data
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=905`
      );
      dispatch(setAllPokemon(data.results));

      // Get first pokemon data from array, and store it
      await axios.get(data.results[0].url).then((data) => {
        dispatch(setSelectedPokemonData(data.data));
      });
    };

    initialisePokemonData();
  }, [dispatch]);

  return (
    <div className={styles.container_outer}>
      <div className={styles.panels}>
        <LeftPanel />
        <PokedexHinge />
        <RightPanel />
      </div>
    </div>
  );
};
