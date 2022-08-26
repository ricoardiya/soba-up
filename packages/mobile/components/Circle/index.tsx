import React from 'react'
import {View} from "react-native-animatable";
import styles from "../../screens/GameTwo/Board/index.style";
import {TouchableWithoutFeedback} from "react-native";
import generateColors from "../../screens/GameTwo/utils/generateColors";

export default function Circle({color}: {color: string}) {
    const onPress = () => {
        if (color == generateColors.RED) {
            console.log('YOU PRESSED RED!')
        }
    };

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.box, {backgroundColor: color}]} />
        </TouchableWithoutFeedback>
    )
}
