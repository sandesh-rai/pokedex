import React from "react";
import styles from "./Pokedex.module.css";
import PokedexHinge from "./PokedexHinge";
import LeftPanel from "./LeftPanel";
import PokedexRightPanel from "./PokedexRightPanel";

export default function Pokedex() {
  return (
    <div className={styles.container_outer}>
      <div className={styles.panels}>
        <LeftPanel />
        <PokedexHinge />
        <PokedexRightPanel />
      </div>
    </div>
  );
}
