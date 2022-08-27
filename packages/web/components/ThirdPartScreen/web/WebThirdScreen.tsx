import React from 'react';
import MockupOne from '../mockup1.png';
import MockupTwo from '../mockup2.png';
import MockupThree from '../mockup3.png';
import Image from 'next/image';
import styles from './WebThirdScreen.module.css';

const WebThirdScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageText}>
        <div>
          <Image src={MockupOne} />
        </div>
        <h2>Tests visual functions</h2>
        <h2>including tracking of</h2>
        <h2>moving objects,</h2>
        <h2>
          reaction time, and<h2>control</h2>
        </h2>
        <br />
        <br />
        <h3>The ball will move in a circular motion. If </h3>
        <h3>it passes through a circle, the circle must </h3>
        <h3>be swiftly tapped. The circle will start to </h3>
        <h3>move faster. You can only touch the circle </h3>
        <h3>if it turns red and if the ball is on top of it.</h3>
        <h3>If you touch the circle if itʼs not red yet, </h3>
        <h3>you'll lose a point</h3>
      </div>
      <div>
        <Image src={MockupTwo} />
        <div className={styles.imageText}>
          <h2>Tests the ability of</h2>
          <h2>perception,</h2>
          <h2>concentration, and</h2>
          <h2>speed control.</h2>
          <br />
          <br />
          <br />
          <br />
          <h3>There are a grid of balls. The balls will</h3>
          <h3>flash either red or blue in a short amount</h3>
          <h3>of time. The individual must tap the red</h3>
          <h3>ball before it disappears. If the blue is</h3>
          <h3>tapped, or the red disappears before it is</h3>
          <h3>tapped, a point is also deducted</h3>
        </div>
      </div>
      <div>
        <Image src={MockupThree} />
        <div className={styles.imageTextContainer}>
          <div className={styles.imageText}>
            <h2>Tests for blurry vision</h2>
            <h2>and loss of</h2>
            <h2>judgement.</h2>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3>There are a grid of balls. Amongst the</h3>
            <h3>grid of balls, some will appear slightly</h3>
            <h3>blurry. Individuals must identify the circles</h3>
            <h3>which are blurry and tap to remove it. If</h3>
            <h3>a circle which isn’t blurry is tapped, the individual</h3>
            <h3>loses a point.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebThirdScreen;
