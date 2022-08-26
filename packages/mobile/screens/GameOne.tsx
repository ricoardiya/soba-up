import React from 'react';
import { Text, View } from 'react-native';

const GameOne = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          margin: 20,
        }}
      >
        Hello World
      </Text>
    </View>
  );
};

export default GameOne;
