import React from 'react'
import Image from 'next/image'
import styles from './MobileSecondScreen.module.css'
import Pattern from '../../pattern.png'
import Collage from '../collage2.png'
import { Button } from '@mui/material'

const MobileSecondScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.collageImage}>
        <Image alt={'collage'} src={Collage} />
      </div>
      <div className={styles.textParentContainer}>
        <div>
          <div className={styles.textContainer}>
            <h1>about</h1>
            <h3>Soba Up is an Application which analyses the</h3>
            <h3>level of alcohol/substance impairment through</h3>
            <h3>a series of games designed to test cognitive</h3>
            <h3>abilities to determine an individual&apos;s level of</h3>
            <h3>awareness.</h3>
            <div className={styles.pattern}>
              <Image alt={'pattern'} src={Pattern} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSecondScreen
