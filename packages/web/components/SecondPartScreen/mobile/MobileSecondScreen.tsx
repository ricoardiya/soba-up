import React from 'react';
import Image from 'next/image';
import styles from './MobileSecondScreen.module.css';
import Pattern from '../../pattern.png';
import { Button } from '@mui/material';

const MobileSecondScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.collageImage}></div>
      <div className={styles.textParentContainer}>
        <div className={styles.textContainer}>
          <div className={styles.headerContainer}>
            <div>
              <h1>soba up</h1>
            </div>
            <div className={styles.zzImage}></div>
          </div>
          <div className={styles.hr}></div>
          <h2>Be safe on a night out</h2>
          <h3>Drunk driving is one of the leading</h3>
          <h3> causes of traffic accidents in the world.</h3>
          <h3> Indonesia is no exception.</h3>
          <div className={styles.visitAppContainer}>
            <div className={styles.hr2}></div>
            <Button sx={{ color: 'black', pr: 2, pl: 2, m: 0.5 }}>
              <h4>Visit App</h4>
            </Button>
          </div>
          <div className={styles.pattern}>
            <Image src={Pattern} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSecondScreen;
