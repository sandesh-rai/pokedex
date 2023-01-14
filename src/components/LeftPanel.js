import React from "react";
import LeftPanelScreen from "./LeftPanelScreen";
import PokedexIndicator from "./PokedexIndicatorPrimary";
import styles from "./LeftPanel.module.css";
import LeftPanelDiagonalDetail from "./LeftPanelDiagonalDetail";
import LeftPanelLowerGrid from "./LeftPanelLowerGrid";

export default function LeftPanel() {
  return (
    <div className={styles.leftPanel}>
      <div className={styles.leftPanelUpper}>
        <PokedexIndicator />
      </div>
      <div className={styles.leftPanelLower}>
        <LeftPanelDiagonalDetail />
        <LeftPanelScreen />
        <LeftPanelLowerGrid />
      </div>
    </div>
  );
}
