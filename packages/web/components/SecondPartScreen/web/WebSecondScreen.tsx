import React from 'react';
import Image from 'next/image';
import styles from './WebSecondScreen.module.css';
import Collage from '../collage2.png';
import Pattern from '../../pattern.png';
import { Button } from '@mui/material';

const WebSecondScreen = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={Collage} layout="responsive" />
        </div>
        <div className={styles.right}>
          <div className={styles.textHeader}>
            <div className={styles.sobaUpBg}>
              <h1>soba up</h1>
              <div className={styles.secondTextHeader}>
                <h1>about</h1>
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <h3>Soba Up is an Application which analyses the</h3>
            <h3>level of alcohol/substance impairment through</h3>
            <h3>a series of games designed to test cognitive</h3>
            <h3>abilities to determine an individual's level of</h3>
            <h3>awareness.</h3>
            <div className={styles.pattern}>
              <Image src={Pattern} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebSecondScreen;
