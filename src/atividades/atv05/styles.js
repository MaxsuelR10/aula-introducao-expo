import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#007791 ',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#318CE7',
    },
    txtSaida: {
        margin: 6,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#318CE7',
    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 20,
        borderColor: '#002D62',
        height: 50,
        color: '#0AFFFF',
        borderRadius: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#0000FF',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        width: 60,
    },
    txtButton: {
        fontSize: 22,
        color: '#B2FFFF',
        textAlign: 'center',
    },
    textLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#002D62',
    },
    butoes:{
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        gap: 25,
    },
});

export default styles;
