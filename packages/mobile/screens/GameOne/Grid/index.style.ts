import { StyleSheet } from 'react-native';
import colors from "../../../config/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  bigCircle: {
    width: 250,
    height: 250,
    borderRadius: 200,
    borderWidth: 1,
    borderStyle: "dashed"
  },
  smallCircle: {
    position: "absolute",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "white",
  },
  topCircle: {
    top: -25,
    left: 100
  },
  bottomCircle: {
    bottom: -25,
    left: 100
  },
  leftCircle: {
    top: 100,
    left: -25
  },
  rightCircle: {
    top: 100,
    right: -25
  },
  redBorder: {
    borderWidth: 2,
    borderColor: colors.RED_CIRCLE,
  },
  blackBorder: {
    borderColor: "black"
  },
  movingCircle: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 50,
    zIndex: 10,
    backgroundColor: colors.GREEN_CIRCLE,
    top: -25,
    left: 100
  },
});
