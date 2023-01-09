import React from 'react'
import styles from './PokedexLeftPanel.module.css'

export default function PokedexLeftPanel() {
  return (
    <div className={styles.leftPanel}>
      <div className={styles.leftPanelUpper}>

      </div>
      <div className={styles.leftPanelLower}>
        <div className={styles.leftPanelTriangle}>
          <div></div>
        </div>
      </div>
    </div>
  )
}
