import axios from "axios";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPokemonData } from "../features/pokemon/pokemonSlice";
import ButtonDirectionsAll from "./ButtonDirectionsAll";
import styles from "./LeftPanelLowerGrid.module.css";
import { SelectedPokemon } from "../types";

export default function LeftPanelLowerGrid() {
  const allPokemon = useSelector(
    (state: SelectedPokemon) => state.pokemon.allPokemon
  );
  const dispatch = useDispatch();

  function handleNameInput(event: ChangeEvent<HTMLInputElement>) {
    let filteredPokemon = allPokemon.filter((pkmn) =>
      pkmn.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    if (filteredPokemon.length === 1) {
      const selectPokemon = async () => {
        await axios.get(filteredPokemon[0].url).then((data) => {
          dispatch(setSelectedPokemonData(data?.data));
        });
      };

      selectPokemon();
    }
  }

  return (
    <div className={styles.gridArea}>
      <div className={styles.topLeft}>
        <button className={styles.circleButton} />
      </div>

      <div className={styles.topMiddle}>
        <button
          className={styles.pillButton}
          style={{ backgroundColor: "#e50c35" }}
        />
        <button
          className={styles.pillButton}
          style={{ backgroundColor: "#00618e" }}
        />
      </div>

      <div className={styles.middle}>
        <input
          placeholder="Search Pokémon"
          onChange={handleNameInput}
          className={styles.inputScreen}
        ></input>
      </div>

      <div className={styles.right}>
        <ButtonDirectionsAll />
      </div>
    </div>
  );
}
