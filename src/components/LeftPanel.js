import React from "react";
import LeftPanelScreen from "./LeftPanelScreen";
import PokedexIndicator from "./PokedexIndicatorPrimary";
import styles from "./LeftPanel.module.css";
import PokedexLeftPanelDiagonalDetail from "./PokedexLeftPanelDiagonalDetail";
import LeftPanelLowerGrid from "./LeftPanelLowerGrid";

export default function LeftPanel() {
  return (
    <div className={styles.leftPanel}>
      <div className={styles.leftPanelUpper}>
        <PokedexIndicator />
      </div>
      <div className={styles.leftPanelLower}>
        <PokedexLeftPanelDiagonalDetail />
        <LeftPanelScreen />
        <LeftPanelLowerGrid />
      </div>
    </div>
  );
}
