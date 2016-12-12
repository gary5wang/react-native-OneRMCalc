import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({

    rootContainer: {
        flex: 1
    },

    inputContainer: {
        flex: 4,
        backgroundColor: 'skyblue'
    },

    inputValue: {
        textAlign: 'center',
        height: 150,
        width: 200,
        fontSize: 22,
        borderColor: 'gray',
        borderWidth: 1
    },

    maxValue: {
        height: 150,
        width: 200,
        marginTop: 60,
        fontSize: 22,
        textAlign: 'center'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'darkblue'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },

    inputRow: {
        flex: 1,
    }
});

export default Style;