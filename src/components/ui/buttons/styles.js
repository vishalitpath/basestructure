import { StyleSheet } from 'react-native'
import { Color } from '../../../utils/color'
import ThemeUtils from '../../../utils/themeUtils';

const styles = StyleSheet.create({
    main_container: {
        alignItems: 'center'
    },
    button: {
        width: 320,
        height: 48,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        color: Color.WHITE,
        fontSize: 21,
        fontWeight: 'bold'
    },
})

export default styles