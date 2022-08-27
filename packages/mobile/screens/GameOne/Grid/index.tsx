import React, {useEffect, useRef, useState} from 'react';
import { View } from 'react-native-animatable';
import styles from "./index.style";
import {Animated, Easing, Text, TouchableWithoutFeedback} from "react-native";
import {useAppDispatch} from "../../../store/hooks";
import {increaseScoreGameOneAction, nextLevelGameOneAction} from "../../../store/actions/gameOneActions";

export default function Grid({targetPos}: {targetPos: number}) {
  const [pos, setPos] = useState(0)
  const redCirclePos = useRef(new Animated.Value(0)).current
  const dispatch = useAppDispatch()
  const TOLERATION = 0.2

  useEffect(() => {
    redCirclePos.addListener(({value}) => {setPos(value)})
    Animated.loop(
      Animated.timing(
        redCirclePos,
        {
          useNativeDriver: false,
          toValue: 2,
          easing: Easing.linear,
          duration: 3000,
        }
      )
    ).start()
  }, [redCirclePos])

  const onPress = () => {
    if ((pos < targetPos + TOLERATION) && (pos > targetPos - TOLERATION)) {
      dispatch(increaseScoreGameOneAction())
    }
    dispatch(nextLevelGameOneAction())
  }

  return (
      <View style={styles.container}>
        <View>
          <View style={styles.bigCircle} />
          <View style={[styles.smallCircle, styles.topCircle, targetPos == 0 ? styles.redBorder: styles.blackBorder]} />
          <View style={[styles.smallCircle, styles.bottomCircle, targetPos == 1 ? styles.redBorder: styles.blackBorder]} />
          <View style={[styles.smallCircle, styles.leftCircle, targetPos == 2 ? styles.redBorder: styles.blackBorder]} />
          <View style={[styles.smallCircle, styles.rightCircle, targetPos == 3 ? styles.redBorder: styles.blackBorder]} />
          <Animated.View style={
            {
              ...styles.bigCircle,
              borderRadius: 0,
              borderWidth: 0,
              position: "absolute",
              transform: [
                {
                  rotate: redCirclePos.interpolate({
                    inputRange: [0, 2],
                    outputRange: ["360deg", "0deg"]
                  })
                }
              ]
            }}
          >
            <View style={styles.movingCircle} />
          </Animated.View>
        </View>
        <View style={{alignSelf: "center", marginTop: 80}}>
          <Text>Tap at the right time & color!</Text>
        </View>
        <View style={styles.tapBorder}>
          <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.tapButton}>
            <Text style={{color: "white", alignSelf: "center", fontSize: 20}}>Tap!</Text>
          </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
  )
}
