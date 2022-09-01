import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import DisclaimerScreen from './DisclaimerScreen/DisclaimerScreen'
import GameOne from './GameOne'
import Games from './Games'
import GameThree from './GameThree'
import GameTwo from './GameTwo'
import LoginScreen from './LoginScreen/LoginScreen'

export default function Screen() {
  const appState = useAppSelector(state => state.appReducer)

  return (
    <>
      {(appState.page === 'login' && <LoginScreen />) ||
        (appState.page == 'disclaimer' && <DisclaimerScreen />) ||
        (appState.page == 'games' && <Games />)}
    </>
  )
}
