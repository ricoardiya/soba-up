import React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import styles from './index.style';
import TimeBar from "./TimeBar";
import Board from "./Board";

export default function Index() {
    return (
        <View style={styles.container}>
            <TimeBar />
            <Board />
        </View>
    );
}
