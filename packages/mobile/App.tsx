import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import GameOne from './screens/GameOne';
import { store } from './store';
import { Provider } from 'react-redux';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          {/* <Navigation colorScheme={colorScheme} /> */}
          <GameOne />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
