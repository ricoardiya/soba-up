import React from 'react'
import MockupOne from '../mockup1.png'
import MockupTwo from '../mockup2.png'
import MockupThree from '../mockup3.png'
import Image from 'next/image'
import styles from './WebThirdScreen.module.css'

const WebThirdScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageText}>
        <div className={styles.imageContainer}>
          <Image src={MockupOne} layout="responsive" />
        </div>
        <h2>
          Tests visual functions including tracking of moving objects, reaction
          time, and control
        </h2>
        <br />
        <br />
        <h3>
          The ball will move in a circular motion. If it passes through a
          circle, the circle must be swiftly tapped. The circle will start to
          move faster. You can only touch the circle if it turns red and if the
          ball is on top of it. If you touch the circle if itʼs not red yet,
          you'll lose a point
        </h3>
      </div>
      <div className={styles.imageText}>
        <div className={styles.imageContainer}>
          <Image src={MockupTwo} layout="responsive" />
        </div>
        <h2>
          Tests the ability of perception, concentration, and speed control.
        </h2>
        <br />
        <br />
        <h3>
          There are a grid of balls. The balls will flash either red or blue in
          a short amount of time. The individual must tap the red ball before it
          disappears. If the blue is tapped, or the red disappears before it is
          tapped, a point is also deducted
        </h3>
      </div>
      <div className={styles.imageText}>
        <div className={styles.imageContainer}>
          <Image src={MockupThree} layout="responsive" />
        </div>
        <h2>Tests for blurry vision and loss of judgement.</h2>
        <br />
        <br />
        <br />

        <h3>
          There are a grid of balls. Amongst the grid of balls, some will appear
          slightly blurry. Individuals must identify the circles which are
          blurry and tap to remove it. If a circle which isn’t blurry is tapped,
          the individual loses a point.
        </h3>
      </div>
    </div>
  )
}

export default WebThirdScreen
