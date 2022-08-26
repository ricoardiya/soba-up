import React from 'react'
import {View} from "react-native-animatable";
import styles from "../../screens/GameTwo/Grid/index.style";
import {TouchableWithoutFeedback} from "react-native";
import colorUtils from "../../store/utils/colorsUtils";
import {useAppDispatch} from "../../store/hooks";
import {increaseScoreGameTwoAction, nextLevelGameTwoAction} from "../../store/actions/gameTwoActions";

export default function Circle({color}: {color: string}) {
    const dispatch = useAppDispatch()

    const onPress = () => {
        if (color == colorUtils.RED) {
            dispatch(increaseScoreGameTwoAction())
            dispatch(nextLevelGameTwoAction())
        } else {
            dispatch(nextLevelGameTwoAction())
        }
    };

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.box, {backgroundColor: color}]} />
        </TouchableWithoutFeedback>
    )
}
