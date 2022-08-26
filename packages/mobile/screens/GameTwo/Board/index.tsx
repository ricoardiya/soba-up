import React, {useEffect, useState} from 'react';
import { View } from 'react-native-animatable';

import styles from './index.style'
import Circle from "../../../components/Circle";
import generateColors from "../utils/generateColors";

export default function TilesCarousel () {
    const numberOfCircles: number = 15

    const colors: Array<string> = generateColors.generateColors(numberOfCircles)

    return (
        <View style={{flex: 1, justifyContent: "center", alignSelf:"center"}}>
        <View style={[styles.container, {
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
        }]}>
            {colors.map((color, index) => {
                return (
                    <Circle key={index.toString()} color={color} />
                )
            })}
        </View>
        </View>
    );
}
