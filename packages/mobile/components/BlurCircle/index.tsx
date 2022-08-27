import React from 'react'
import { View } from "react-native-animatable";
import { TouchableWithoutFeedback } from "react-native";
import { useAppDispatch } from "../../store/hooks";
import { toogleCircle } from "../../store/actions/gameThreeActions";
import blurryUtils from "../../store/utils/blurryUtils";
import styles from "./index.style";

export default function BlurCircle({ circleProp, idx }: { circleProp: string, idx: string }) {
    const dispatch = useAppDispatch()

    const onPress = () => {
        dispatch(toogleCircle(idx))
    };

    let styleCircle;
    if (circleProp === blurryUtils.BLUR) {
        styleCircle = [styles.box, styles.blurBox]
    } else {
        styleCircle = [styles.box]
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styleCircle} />
        </TouchableWithoutFeedback>
    )
}
