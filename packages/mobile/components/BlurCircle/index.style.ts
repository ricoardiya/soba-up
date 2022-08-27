import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    box: {
        width: 35,
        height: 35,
        borderRadius: 30,
        borderWidth: 1,
        margin: 20,
        backgroundColor: "black",
    },
    blurBox: {
        backgroundColor: "black",
        opacity: 0.95,
        shadowColor: "black",
        shadowRadius: 2,
        shadowOpacity: 10,
        shadowOffset: {
            width: -1, height: 1
        }
    }
});
