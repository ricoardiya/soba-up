import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Zz from './zz1.png';
import styles from './FirstPartScreen.module.css';
import Collage from './collage1.png';
import Pattern from './pattern.png';
import WebFirstScreen from './web/WebFirstScreen';
import MobileFirstScreen from './mobile/MobileFirstScreen';

const FirstPartScreen = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);

  const updateDimensions = () => {
    const width = window.innerWidth;
    console.log(width);
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return windowWidth > 1401 ? <WebFirstScreen /> : <MobileFirstScreen />;
};

export default FirstPartScreen;
