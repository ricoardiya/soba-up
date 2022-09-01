import React from 'react'
import { View } from 'react-native-animatable'
import { TouchableWithoutFeedback } from 'react-native'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import LoginScreen from './LoginScreen/LoginScreen'

export default function Screen() {
  const appState = useAppSelector(state => state.appReducer)

  return <>{appState.page === 'login' && <LoginScreen />}</>
}
