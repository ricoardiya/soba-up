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
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colors.DEFAULT_BLACK
  },
  smallCircle: {
    position: "absolute",
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: colors.DEFAULT_BLACK,
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
  tapBorder: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 40,
    width: 120,
    height: 120,
    borderColor: colors.DEFAULT_BLACK,
    borderWidth: 2,
    borderRadius: 120
  },
  tapButton: {
    justifyContent: "center",
    alignSelf: "center",
    width: 90,
    height: 90,
    backgroundColor: colors.DEFAULT_BLACK,
    borderRadius: 100
  }
});
