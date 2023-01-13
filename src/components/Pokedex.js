import React, { useEffect } from "react";
import styles from "./Pokedex.module.css";
import PokedexHinge from "./PokedexHinge";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPokemonList } from "../features/pokemon/pokemonSlice";

export default function Pokedex() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllPokemon = async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1000`
      );

      dispatch(setPokemonList(data.results));
    };

    getAllPokemon();
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
}
