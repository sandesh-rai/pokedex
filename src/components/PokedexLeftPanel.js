import React from "react";
import LeftPanelScreen from "./LeftPanelScreen";
import PokedexIndicator from "./PokedexIndicatorPrimary";
import styles from "./PokedexLeftPanel.module.css";
import PokedexLeftPanelDiagonalDetail from "./PokedexLeftPanelDiagonalDetail";

export default function PokedexLeftPanel() {
  return (
    <div className={styles.leftPanel}>
      <div className={styles.leftPanelUpper}>
        <PokedexIndicator />
      </div>
      <div className={styles.leftPanelLower}>
        <PokedexLeftPanelDiagonalDetail />
        <LeftPanelScreen />
      </div>
    </div>
  );
}
