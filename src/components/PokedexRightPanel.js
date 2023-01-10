import React from "react";
import styles from "./PokedexRightPanel.module.css";
import PokedexRightPanelGridButtons from "./PokedexRightPanelGridButtons";
import PokedexRightPanelScreen from "./PokedexRightPanelScreen";

export default function PokedexRightPanel() {
  return (
    <div className={styles.rightPanel}>
      <PokedexRightPanelScreen />
      <PokedexRightPanelGridButtons />
      <div></div>
      <div className={styles.rightPanelTriangle} />
    </div>
  );
}
