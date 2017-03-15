import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({

    rootContainer: {
        flex: 1
    },

    helpContainer: {
        height: 30,
        width: 30,
        marginTop: 20,
        marginRight: 5,
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'blue'
    },

    inputContainer: {
        flex: 4
    },

    inputValue: {
        textAlign: 'center',
        flex: 1,
        fontSize: 40,
        fontFamily: 'AvenirNext-Medium'
    },

    inputButtonText: {
        fontSize: 30,
        color: 'black'
    },

    helpButton: {
        fontSize: 20,
        color: 'black'
    },

    button: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'AvenirNext-Bold'
    },

    buttonContainer: {
        flex: 1,
        padding: 15,
        overflow: 'hidden',
        borderRadius: 20
    },

    inputRow: {
        flex: 1,
        padding: 2
    },

});

export default Style;