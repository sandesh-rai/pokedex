import React from "react";
import ButtonDirectionsAll from "./ButtonDirectionsAll";
import styles from "./LeftPanelLowerGrid.module.css";

export default function LeftPanelLowerGrid() {
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
          value="Use D-Pad to select"
          className={styles.inputScreen}
          disabled
        ></input>
      </div>

      <div className={styles.right}>
        <ButtonDirectionsAll />
      </div>
    </div>
  );
}
