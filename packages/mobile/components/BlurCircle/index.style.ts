import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    box: {
        width: 35,
        height: 35,
        borderRadius: 30,
        margin: 20,
        backgroundColor: "#202020",
    },
    boxPressed: {
        width: 35,
        height: 35,
        borderRadius: 30,
        margin: 20,
        backgroundColor: "#de6fa1",
    },
    blurBox: {
        opacity: 0.94,
        shadowColor: "#202020",
        shadowRadius: 1.8,
        shadowOpacity: 10,
        shadowOffset: {
            width: -1 , height: 1
        }
    }
});