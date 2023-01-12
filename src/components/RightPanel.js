import React from "react";
import styles from "./RightPanel.module.css";
import RightPanelGridButtons from "./RightPanelGridButtons";
import RightPanelScreen from "./RightPanelScreen";
import RightPanelRowButtons from "./RightPanelRowButtons";

export default function RightPanel() {
  return (
    <div className={styles.rightPanel}>
      <div className={styles.rightPanelTriangle} />
      <RightPanelScreen />
      <RightPanelGridButtons />
      <div /> {/* Empty Spacing */}
      <RightPanelRowButtons />
    </div>
  );
}
