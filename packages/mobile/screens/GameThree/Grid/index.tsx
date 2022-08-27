import React from 'react';
import { View } from 'react-native-animatable';

import BlurCircle from "../../../components/BlurCircle";
import styles from "./index.style";

export default function Grid ({circleProps}: {circleProps: Array<string>}) {

    return (
        <View style={{flex: 1, justifyContent: "center", alignSelf:"center"}}>
        <View style={[styles.container, {
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
        }]}>
            {circleProps.map((prop, index) => {
                return (
                    <BlurCircle key={index.toString()} circleProp={prop} idx={index.toString()}/>
                )
            })}
        </View>
        </View>
    );
}
