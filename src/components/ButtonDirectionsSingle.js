import styles from "./ButtonDirectionsSingle.module.css";

export default function ButtonDirectionsSingle({
  direction,
  setCurrPkmnId,
  currPkmnId,
  allPkmn,
}) {
  function buttonClicked() {
    if (["up", "right", "left", "down"].includes(direction)) {
      // Increase ID
      if (["up", "right"].includes(direction)) {
        setCurrPkmnId(currPkmnId + 1);

        if (currPkmnId >= allPkmn.length) {
          setCurrPkmnId(1);
        }
      }
      // Decrease ID
      else if (["down", "left"].includes(direction)) {
        if (currPkmnId === 1) {
          setCurrPkmnId(allPkmn.length);
        } else {
          setCurrPkmnId(currPkmnId - 1);
        }
      }
    }
  }

  return (
    <button className={styles.singleDirection} onClick={buttonClicked}></button>
  );
}
