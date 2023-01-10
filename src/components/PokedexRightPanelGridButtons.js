import React from "react";
import ButtonSquare from "./ButtonSquare";
import styles from "./PokedexRightPanelGridButtons.module.css";

export default function PokedexRightPanelGridButtons() {
  return (
    <div className={styles.gridButtons}>
      {[...Array(10).keys()].map((key) => (
        <ButtonSquare key={key} />
      ))}
    </div>
  );
}
