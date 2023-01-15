import React from "react";
import styles from "./Startup.module.css";

export default function Startup({ startAppPressed }) {
  function openLink() {
    var win = window.open("https://www.linkedin.com/in/sandesh-rai/", "_blank");
    win.focus();
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
}
