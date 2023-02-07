import ButtonSquare from "./ButtonSquare";
import styles from "./RightPanelRowButtonsMiddle.module.css";

export default function RightPanelRowButtonsMiddle() {
  return (
    <div className={styles.buttonRow}>
      <ButtonSquare />
      <ButtonSquare />
      <div />
      <button className={styles.buttonCircle} />
    </div>
  );
}
