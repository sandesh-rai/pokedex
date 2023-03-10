import React, { useEffect, useState } from "react";
import ButtonDirectionsSingle from "./ButtonDirectionsSingle";
import styles from "./ButtonDirectionsAll.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSelectedPokemonData } from "../features/pokemon/pokemonSlice";
import { SelectedPokemon } from "../types";

export default function ButtonDirectionsAll() {
  const dispatch = useDispatch();
  const allPkmn = useSelector(
    (state: SelectedPokemon) => state.pokemon.allPokemon
  );

  const [currPkmnId, setCurrPkmnId] = useState<number>(1);

  useEffect(() => {
    // Get selected pokemon, and update store
    if (!allPkmn[currPkmnId - 1]) return;

    const nextPokemon = async () => {
      await axios.get(allPkmn[currPkmnId - 1].url).then((data) => {
        dispatch(setSelectedPokemonData(data?.data));
      });
    };

    nextPokemon();
  }, [allPkmn, currPkmnId, dispatch]);

  return (
    <div className={styles.allDirections}>
      {/* Top Button */}
      <ButtonDirectionsSingle
        direction="up"
        setCurrPkmnId={setCurrPkmnId}
        currPkmnId={currPkmnId}
        allPkmn={allPkmn}
      />

      {/* Left Button */}
      <ButtonDirectionsSingle
        direction="left"
        setCurrPkmnId={setCurrPkmnId}
        currPkmnId={currPkmnId}
        allPkmn={allPkmn}
      />

      {/* Down Button */}
      <ButtonDirectionsSingle
        direction="down"
        setCurrPkmnId={setCurrPkmnId}
        currPkmnId={currPkmnId}
        allPkmn={allPkmn}
      />

      {/* Right Button */}
      <ButtonDirectionsSingle
        direction="right"
        setCurrPkmnId={setCurrPkmnId}
        currPkmnId={currPkmnId}
        allPkmn={allPkmn}
      />

      <div className={styles.buttonCenter} />
    </div>
  );
}
