import React from "react";
import ButtonDirectionsAll from "./ButtonDirectionsAll";
import styles from "./LeftPanelLowerGrid.module.css";

export default function LeftPanelLowerGrid() {
  return (
    <div className={styles.gridArea}>
      <div className={styles.top}>Top</div>
      <div className={styles.middle}>Middle</div>
      <div className={styles.right}>
        <ButtonDirectionsAll />
      </div>
    </div>
  );
}
