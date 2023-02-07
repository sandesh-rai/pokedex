import { StartUpProps } from "../types";
import styles from "./Startup.module.css";

export const Startup = ({ startAppPressed }: StartUpProps): JSX.Element => {
  function openLink() {
    window.open("https://www.linkedin.com/in/sandesh-rai/", "_blank");
  }
  return (
    <div className={styles.startUpContainer}>
      <section>
        <div>
          <h2>Pokédex</h2>
          <h3>Created by Sandesh Rai</h3>
          <div className={styles.buttonsRow}>
            <button onClick={openLink}>View LinkedIn</button>
            <button onClick={startAppPressed}>Start app</button>
          </div>
        </div>
      </section>
    </div>
  );
};
