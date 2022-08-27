import React from 'react'
import { View } from "react-native-animatable";
import { TouchableWithoutFeedback } from "react-native";
import { useAppDispatch } from "../../store/hooks";
import { toogleCircle } from "../../store/actions/gameThreeActions";
import blurryUtils from "../../store/utils/blurryUtils";
import styles from "./index.style";
import { useState } from 'react';

export default function BlurCircle({ circleProp, idx }: { circleProp: string, idx: string }) {
    const [style, setStyle] = useState(styles.box);

    const dispatch = useAppDispatch()

    const onPress = () => {
        dispatch(toogleCircle(idx))
    };
    const onPressIn = () => {
        setStyle(styles.boxPressed)
    }
    const onPressOut = () => {
        setStyle(styles.box)
    }

    let styleCircle;
    if (circleProp === blurryUtils.BLUR) {
        styleCircle = [style, styles.blurBox]
    } else {
        styleCircle = [style]
    }

    return (
        <TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
            <View style={styleCircle} />
        </TouchableWithoutFeedback>
    )
}
