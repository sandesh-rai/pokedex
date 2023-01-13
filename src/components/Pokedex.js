import React, { useEffect, useState } from "react";
import styles from "./Pokedex.module.css";
import PokedexHinge from "./PokedexHinge";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import axios from "axios";

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  const getAllPokemon = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=1000`
    );
    setPokemonList(data);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

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
