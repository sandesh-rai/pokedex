import ButtonSquare from "./ButtonSquare";
import styles from "./RightPanelRowButtonsBottom.module.css";

export default function RightPanelRowButtonsBottom() {
  return (
    <div className={styles.buttonRow}>
      <ButtonSquare />
      <div />
      <ButtonSquare />
    </div>
  );
}
