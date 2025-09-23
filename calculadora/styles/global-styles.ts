import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 30,
        fontFamily: "SpaceMono"
    },

    calculaterContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '400',
        marginBottom: 20,
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 30,
        textAlign: 'right',
        fontWeight: '300',
        marginBottom: 30,
    },

    row: {
        minWidth: "100%",
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    customBtn: {
        height: 75,
        width: 75,
        gap: 10,
        backgroundColor: Colors.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 12,

    },
    customBtnText: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: "300"
    }
});