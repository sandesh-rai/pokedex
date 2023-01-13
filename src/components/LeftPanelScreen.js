import React from "react";
import { useSelector } from "react-redux";
import styles from "./LeftPanelScreen.module.css";

export default function LeftPanelScreen() {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  console.log(selectedPokemon);

  return (
    <div className={styles.screenContainer}>
      <div className={styles.screen}>
        <img
          src={
            selectedPokemon?.sprites?.other?.["official-artwork"].front_default
          }
          alt={selectedPokemon?.name}
        ></img>
      </div>

      <div className={styles.bezelTop}>
        <div />
        <div />
      </div>

      <div className={styles.bezelBottom}>
        <div className={styles.bezelBottomDot} />
        <div className={styles.bezelBottomLines}>
          {[...Array(6).keys()].map((key) => (
            <div key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
