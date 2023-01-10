import React from 'react'
import styles from './PokedexScreen.module.css'

export default function PokedexScreen() {
  return (
    <div className={styles.screenContainer}>
        <div className={styles.screen}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="ditto"></img>
        </div>

        <div className={styles.bezelTop}>
            <div/>
            <div/>
        </div>

        <div className={styles.bezelBottom}>
            <div className={styles.bezelBottomDot}/>
            <div className={styles.bezelBottomLines}>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    </div>
  )
}
