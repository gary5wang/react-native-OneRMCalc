import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({

    rootContainer: {
        flex: 1,
        backgroundColor: '#E1F5FE'
    },

    helpContainer: {
        height: 30,
        width: 30,
        marginTop: 20,
        marginRight: 5,
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#1976D2'
    },

    inputContainer: {
        flex: 4
    },

    inputValue: {
        color: '#1A237E',
        textAlign: 'center',
        flex: 1,
        fontSize: 40,
        fontFamily: 'AvenirNext-Medium'
    },

    inputButtonText: {
        fontSize: 30,
        color: 'white'
    },

    helpButton: {
        fontSize: 20,
        color: '#1A237E'
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