import React from "react";
import ButtonSquare from "./ButtonSquare";
import styles from "./RightPanelRowButtons.module.css";

export default function RightPanelRowButtons() {
  return (
    <div className={styles.buttonRow}>
      <ButtonSquare />
      <ButtonSquare />
      <div />
      <button className={styles.buttonCircle} />
    </div>
  );
}
