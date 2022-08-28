import React, { useEffect } from 'react'
import WebFirstScreen from './web/WebFirstScreen'
import MobileFirstScreen from './mobile/MobileFirstScreen'

const FirstPartScreen = () => {
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

  return windowWidth > 1401 ? <WebFirstScreen /> : <MobileFirstScreen />
}

export default FirstPartScreen
