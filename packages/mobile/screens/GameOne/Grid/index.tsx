import React, {useEffect, useRef, useState} from 'react';
import { View } from 'react-native-animatable';
import styles from "./index.style";
import {Animated, Easing} from "react-native";

export default function Grid() {
  const [pos, setPos] = useState(0)

  const redPos = useRef(new Animated.Value(0)).current

  useEffect(() => {
    redPos.addListener(({value}) => {setPos(value)})
    Animated.loop(
      Animated.timing(
        redPos,
        {
          useNativeDriver: false,
          toValue: 2,
          easing: Easing.linear,
          duration: 3000,
        }
      )
    ).start()
  }, [redPos])

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.bigCircle} />
        <View style={styles.topCircle} />
        <View style={styles.bottomCircle} />
        <View style={styles.leftCircle} />
        <View style={styles.rightCircle} />
        <Animated.View style={
          {
            ...styles.bigCircle,
            borderRadius: 0,
            borderWidth: 0,
            position: "absolute",
            transform: [
              {
                rotate: redPos.interpolate({
                  inputRange: [0, 2],
                  outputRange: ["360deg", "0deg"]
                })
              }
            ]
          }}
        >
          <View style={styles.redCircle} />
        </Animated.View>
      </View>
    </View>
  )
}
