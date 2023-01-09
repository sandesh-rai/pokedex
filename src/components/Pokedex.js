import React from 'react'
import styles from './Pokedex.module.css'
import PokedexLeftPanel from './PokedexLeftPanel'

export default function Pokedex() {
  return (
    <div className={styles.container_outer}>
      <div className={styles.panels}>
        <PokedexLeftPanel/>
        
      </div>
    </div>
  )
}
