import { StyleSheet } from "react-native";
import { Color } from "../../../utils/color";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 3,
        borderColor: Color.DARK_GRAY,
        backgroundColor: Color.WHITE,
        borderRadius: 25,
        borderWidth: 2,
        height: 50,
        width: 320,
        marginLeft: 5,
        alignSelf: 'center'
    },
    username: {
        height: 40,
        width: 400,
        justifyContent: 'space-between',
        borderColor: Color.PRIMARY,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 8,
        fontSize: 16
    },
    iconStyle: {
        marginTop: 10,
        marginLeft: 20,
        // position: 'absolute',
        fontSize: 25,
        color: Color.BLACK,
    },
    // iconStyle1: {
    //     marginTop: 10,
    //     marginLeft: 270,
    //     position: 'absolute',
    //     fontSize: 25,
    //     color: Color.BLACK,
    // },
    eyeIcon: {
        position: 'absolute',
        right: 13,
        marginTop: 11,
    },
})

export default styles;