import React, { useEffect } from 'react';
import { createTheme } from '@mui/material';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import { ThemeProvider } from '@emotion/react';
import FirstPartScreen from '../components/FirstPartScreen/FirstPartScreen';
import SecondPartScreen from '../components/SecondPartScreen/SecondPartScreen';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DE6FA1',
    },
    secondary: {
      main: '#202020',
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <HeaderBar />
        <FirstPartScreen />
        <SecondPartScreen />
      </div>
    </ThemeProvider>
  );
}
