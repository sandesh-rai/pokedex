import React from 'react'
import styles from './Pokedex.module.css'
import PokedexHinge from './PokedexHinge'
import PokedexLeftPanel from './PokedexLeftPanel'
import PokedexRightPanel from './PokedexRightPanel'

export default function Pokedex() {
  return (
    <div className={styles.container_outer}>
      <div className={styles.panels}>
        <PokedexLeftPanel/>
        <PokedexHinge/>
        <PokedexRightPanel/>
      </div>
    </div>
  )
}
