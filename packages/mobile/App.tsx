import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { store } from './store'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import SignUpScreen from './screens/SignUpScreen.tsx/SignUpScreen'
import EmergencyContactScreen from './screens/EmergencyContactScreen/EmergencyContactScreen'
import SplashScreen from './screens/SplashScreen/SplashScreen'
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import GameTwo from './screens/GameTwo'
import Games from './screens/Games'
import GameOne from './screens/GameOne'
import GameThree from './screens/GameThree'
import DisclaimerScreen from './screens/DisclaimerScreen/DisclaimerScreen'
import ResultScreen from './screens/ResultScreen/ResultScreen'
import AnalysisScreen from './screens/AnalysisScreen/AnalysisScreen'
import NextStepScreen from './screens/NextStepScreen/NextStepScreen'
import { useAppDispatch, useAppSelector } from './store/hooks'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const appState = useAppSelector(state => state.appReducer)

  const appState = useAppSelector(state => state.appReducer.page)

  if (!isLoadingComplete) {
    return null
  } else {
    if (appState === 'login') {
      return <LoginScreen />
    } else if (appState === 'disclaimer') {
      return <DisclaimerScreen />
    }

    return (
      <Provider store={store}>
        <SafeAreaProvider>
          {/* <Navigation colorScheme={colorScheme} /> */}
          {/* <HomeScreen /> */}
          {/* <SignUpScreen /> */}
          {/* <EmergencyContactScreen /> */}
          {/* <SplashScreen /> */}
          {/* <WelcomeScreen /> */}
          <LoginScreen />
          {/* <DisclaimerScreen /> */}
          {/* <ResultScreen /> */}
          {/* <AnalysisScreen /> */}
          <NextStepScreen />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    )
  } else {
    if (appState.page === 'login') {
      return (
        <Provider store={store}>
          <SafeAreaProvider>
            <LoginScreen />
          </SafeAreaProvider>
        </Provider>
      )
    } else if (appState.page === 'disclaimer') {
      return (
        <Provider store={store}>
          <SafeAreaProvider>
            <DisclaimerScreen />
          </SafeAreaProvider>
        </Provider>
      )
    } else {
      return (
        <Provider store={store}>
          <SafeAreaProvider>
            <Games />
          </SafeAreaProvider>
        </Provider>
      )
    }
  }
}
