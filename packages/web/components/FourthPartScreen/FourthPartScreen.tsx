import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import styles from './FourthPartScreen.module.css'

const FourthPartScreen = () => {
  const [windowWidth, setWindowWidth] = React.useState(0)

  const updateDimensions = () => {
    const width = window.innerWidth
    console.log(width)
    setWindowWidth(width)
  }

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  // this should be in configuration file
  const onVisitApp = () => {
    window.open('https://soba-up-mobile.vercel.app', '_blank')
  }

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.buttonContainer}>
        <div>
          <h1>Feel Safe Now</h1>
          <div className={styles.visitAppContainer}>
            {windowWidth > 1401 ? (
              <>
                <div className={styles.hr2}></div>
                <Button
                  sx={{ color: 'black', pr: 2, pl: 2, m: 0.5 }}
                  onClick={onVisitApp}
                >
                  <h3>Visit App</h3>
                </Button>
              </>
            ) : (
              <>
                <Button
                  sx={{ borderColor: 'white' }}
                  variant="outlined"
                  onClick={onVisitApp}
                >
                  <h3>Visit App</h3>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthPartScreen
