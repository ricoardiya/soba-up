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
import Screen from './screens/Screen'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    {
      /* <Navigation colorScheme={colorScheme} /> */
    }
    {
      /* <HomeScreen /> */
    }
    {
      /* <SignUpScreen /> */
    }
    {
      /* <EmergencyContactScreen /> */
    }
    {
      /* <SplashScreen /> */
    }
    {
      /* <WelcomeScreen /> */
    }
    // <LoginScreen />
    {
      /* <DisclaimerScreen /> */
    }
    {
      /* <ResultScreen /> */
    }
    {
      /* <AnalysisScreen /> */
    }
    // <NextStepScreen />
    // <StatusBar />

    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Screen />
        </SafeAreaProvider>
      </Provider>
    )
  }
}
