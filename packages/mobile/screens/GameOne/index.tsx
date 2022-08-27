import React, {useEffect} from 'react';
import { View } from '../../components/Themed';
import styles from './index.style';
import TimeBar from "../../components/TimeBar";
import Grid from "./Grid";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Text} from "react-native";
import {startGameOneAction, startTimerAction} from "../../store/actions/gameOneActions";

export default function GameOne() {
  const gameOneState = useAppSelector((state) => state.gameOneReducers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(startGameOneAction())
    dispatch(startTimerAction())
  }, [])

  return (
    <View style={styles.container}>
      {gameOneState.isGameRunning &&
        (
          <>
            <TimeBar />
            <Grid
              targetPos={gameOneState.targetPos}
              decoyPos1={gameOneState.decoyPos1}
              decoyPos2={gameOneState.decoyPos2}
            />
          </>
        )
      }
      {!gameOneState.isGameRunning &&
        <>
          <Text>your score is {gameOneState.score}</Text>
        </>
      }
    </View>
  )
}
