import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import MainCircle from '../../components/GameOne/MainCircle/MainCircle';
import entities from './entities';
import styles from './index.style';
import Physics from './physics';

const GameOne = () => {
  return (
    <View style={styles.parentContainer}>
      <GameEngine
        style={styles.gameEngineContainer}
        entities={entities()}
        systems={[Physics]}
        running={false}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>
    </View>
  );
};

export default GameOne;
