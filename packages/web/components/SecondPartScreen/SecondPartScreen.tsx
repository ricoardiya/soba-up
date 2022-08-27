import React, { useEffect } from 'react';
import WebSecondScreen from './web/WebSecondScreen';
import MobileSecondScreen from './mobile/MobileSecondScreen';

const SecondPartScreen = () => {
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

  return windowWidth > 1401 ? <WebSecondScreen /> : <MobileSecondScreen />;
};

export default SecondPartScreen;
