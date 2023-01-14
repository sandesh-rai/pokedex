import React from "react";
import { useSelector } from "react-redux";
import styles from "./RightPanelScreen.module.css";

export default function RightPanelScreen() {
  const pokemonName = useSelector(
    (state) => state.pokemon.selectedPokemon.name
  );

  function formatName(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div className={styles.rightPanelScreen}>
      <h2>{formatName(pokemonName)}</h2>
    </div>
  );
}
