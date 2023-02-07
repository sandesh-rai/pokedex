import React from "react";
import { useSelector } from "react-redux";
import styles from "./LeftPanelScreen.module.css";

type SelectedPokemon = {
  pokemon: {
    selectedPokemon: {
      sprites: {
        other: {
          "official-artwork": {
            front_default: string;
          };
        };
      };
      name: string;
    };
  };
};

export default function LeftPanelScreen() {
  const selectedPokemon = useSelector(
    (state: SelectedPokemon) => state.pokemon.selectedPokemon
  );

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
