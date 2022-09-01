import React from 'react'
import { View } from 'react-native-animatable'

import Circle from '../../../components/Circle'
import styles from './index.style'
import { Text } from 'react-native'

export default function Grid({ colors }: { colors: Array<string> }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
          }
        ]}
      >
        {colors.map((color, index) => {
          return <Circle key={index.toString()} color={color} />
        })}
      </View>
      <View style={{ alignSelf: 'center', marginTop: '5%' }}>
        <Text>Tap only the green dot!</Text>
      </View>
    </View>
  )
}
