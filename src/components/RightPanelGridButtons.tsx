import ButtonSquare from "./ButtonSquare";
import styles from "./RightPanelGridButtons.module.css";

export default function RightPanelGridButtons() {
  return (
    <div className={styles.gridButtons}>
      {[...Array(10).keys()].map((key) => (
        <ButtonSquare key={key} />
      ))}
    </div>
  );
}
