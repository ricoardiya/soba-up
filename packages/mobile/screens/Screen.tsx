import React from 'react'
import { View } from 'react-native-animatable'
import { TouchableWithoutFeedback } from 'react-native'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import LoginScreen from './LoginScreen/LoginScreen'
import DisclaimerScreen from './DisclaimerScreen/DisclaimerScreen'
import WelcomeScreen from './WelcomeScreen/WelcomeScreen'
import Games from './Games'
import AnalysisScreen from './AnalysisScreen/AnalysisScreen'
import SignUpScreen from './SignUpScreen.tsx/SignUpScreen'
import EmergencyContactScreen from './EmergencyContactScreen/EmergencyContactScreen'
import NextStepScreen from './NextStepScreen/NextStepScreen'
import HomeScreen from './HomeScreen/HomeScreen'

export default function Screen() {
  const appState = useAppSelector(state => state.appReducer)

  return (
    <>
      {appState.page === 'home' && <HomeScreen />}
      {appState.page === 'signup' && <SignUpScreen />}
      {appState.page === 'emergencyContact' && <EmergencyContactScreen />}
      {appState.page === 'welcome' && <WelcomeScreen />}
      {appState.page === 'login' && <LoginScreen />}
      {appState.page === 'disclaimer' && <DisclaimerScreen />}
      {appState.page === 'games' && <Games />}
      {appState.page === 'analysis' && <AnalysisScreen />}
      {appState.page === 'nextStep' && <NextStepScreen />}
    </>
  )
}
