import { StyleSheet } from 'react-native';
import colors from '../../../config/colors';
import metrics from '../../../config/metrics';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        backgroundColor: '#de6fa1',
        // height: metrics.TIME_BAR_HEIGHT,
        height: metrics.TIME_BAR_HEIGHT,
        borderColor: colors.TRANSPARENT_DARK,
        borderWidth: 1,
    },
});
