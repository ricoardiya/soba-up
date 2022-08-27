import React, { useEffect } from 'react';
import WebThirdScreen from './web/WebThirdScreen';
import MobileThirdScreen from './mobile/MobileThirdScreen';

const ThirdPartScreen = () => {
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

  return windowWidth > 1401 ? <WebThirdScreen /> : <MobileThirdScreen />;
};

export default ThirdPartScreen;
