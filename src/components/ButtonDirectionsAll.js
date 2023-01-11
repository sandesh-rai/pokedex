import React from "react";
import ButtonDirectionsSingle from "./ButtonDirectionsSingle";
import styles from "./ButtonDirectionsAll.module.css";

export default function ButtonDirectionsAll() {
  return (
    <div className={styles.allDirections}>
      <ButtonDirectionsSingle />
      <ButtonDirectionsSingle />
      <ButtonDirectionsSingle />
      <ButtonDirectionsSingle />
      <div className={styles.buttonCenter} />
    </div>
  );
}
