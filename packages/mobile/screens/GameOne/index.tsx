import React from 'react';
import { View } from '../../components/Themed';
import styles from './index.style';
import TimeBar from "../../components/TimeBar";
import Grid from "./Grid";

export default function GameOne() {
    return (
        <View style={styles.container}>
            <TimeBar />
            <Grid />
        </View>
    )
}
