import React from 'react'
import PokedexIndicator from './PokedexIndicatorPrimary'
import styles from './PokedexLeftPanel.module.css'
import PokedexLeftPanelDiagonalDetail from './PokedexLeftPanelDiagonalDetail'
import PokedexScreen from './PokedexScreen'

export default function PokedexLeftPanel() {
  return (
    <div className={styles.leftPanel}>
      <div className={styles.leftPanelUpper}>
        <PokedexIndicator/>
      </div>
      <div className={styles.leftPanelLower}>
        <PokedexLeftPanelDiagonalDetail/>
        <PokedexScreen/>
      </div>
    </div>
  )
}
