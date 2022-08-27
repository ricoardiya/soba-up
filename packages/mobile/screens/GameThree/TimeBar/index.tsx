import { View } from 'react-native-animatable'
import { Animated, Easing } from 'react-native'
import styles from './index.style'
import metrics from '../../../config/metrics'
import timings from '../../../config/timings'
import { useEffect, useState } from 'react'

export default function TimeBar() {
  const [animateValue] = useState(new Animated.Value(timings.TIME_LIMIT_MS))

  useEffect(() => {
    Animated.timing(animateValue, {
      useNativeDriver: false,
      duration: timings.TIME_LIMIT_MS,
      easing: Easing.linear,
      toValue: 0
    }).start()
  }, [])

    // Animate the TimeBar color from grey to red, starting when there are left only 12 seconds
    // const backgroundColor = animateValue.interpolate({
    //     inputRange: [0, timings.TIME_LIMIT_MS * 0.4, timings.TIME_LIMIT_MS],
    //     outputRange: ['rgba(255,0,0, 1)', 'rgba(100,0,100, 1)', 'rgba(0,0,255, 1)'],
    // });
    // Animate the TimeBar width from DEVICE_WIDTH to 0 in TIME_LIMIT_MS (which currently is 30 seconds)
    const width = animateValue.interpolate({
        inputRange: [0, timings.TIME_LIMIT_MS],
        outputRange: [0, metrics.DEVICE_WIDTH],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.content, {width}]} />
        </View>
    );
}
