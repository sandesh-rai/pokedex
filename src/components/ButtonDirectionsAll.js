import React, { useEffect, useState } from "react";
import ButtonDirectionsSingle from "./ButtonDirectionsSingle";
import styles from "./ButtonDirectionsAll.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setSelectedPokemonData } from "../features/pokemon/pokemonSlice";

export default function ButtonDirectionsAll() {
  const dispatch = useDispatch();
  const allPkmn = useSelector((state) => state.pokemon.allPokemon);

  const [currPkmnId, setCurrPkmnId] = useState(1);

  useEffect(() => {
    // Get selected pokemon, and update store
    const nextPokemon = async () => {
      await axios.get(allPkmn[currPkmnId - 1].url).then((data) => {
        dispatch(setSelectedPokemonData(data.data));
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
