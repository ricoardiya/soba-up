import { StyleSheet } from 'react-native';

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
    borderWidth: 1
  },
  topCircle: {
    position: "absolute",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "white",
    top: -25,
    left: 100
  },
  bottomCircle: {
    position: "absolute",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "white",
    bottom: -25,
    left: 100
  },
  leftCircle: {
    position: "absolute",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "white",
    top: 100,
    left: -25
  },
  rightCircle: {
    position: "absolute",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "white",
    top: 100,
    right: -25
  },
  redCircle: {
    position: "absolute",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    zIndex: 10,
    backgroundColor: "red",
    top: -25,
    left: 100
  },
});
