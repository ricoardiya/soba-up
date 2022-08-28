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
import DisclaimerScreen from './screens/DisclaimerScreen/DisclaimerScreen'
import ResultScreen from './screens/ResultScreen/ResultScreen'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          {/* <Navigation colorScheme={colorScheme} /> */}
          {/* <HomeScreen /> */}
          {/* <SignUpScreen /> */}
          {/* <EmergencyContactScreen /> */}
          {/* <SplashScreen /> */}
          {/* <WelcomeScreen /> */}
          {/* <LoginScreen /> */}
          {/* <DisclaimerScreen /> */}
          <ResultScreen />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    )
  }
}
