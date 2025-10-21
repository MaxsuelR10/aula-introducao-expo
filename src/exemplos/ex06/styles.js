import { Button, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        padding: RFValue(8),
        width: '100%',
        borderRadius: RFValue(20),
    },
    titulo: {
        margin: RFValue(6),
        fontSize: RFValue(28),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'deepskyblue',
    },
    entradaImc: {
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        height: 80,
        textAlign: 'center',
        width: '50%',
        fontSize: 50,
        marginTop: 24,
        color: 'lightgray',
    },
    button: {
        backgroundColor: '#89FFA5',
    },
    buttonText: {
        alignSelf: 'center',
        padding: 30,
        fontSize: 25,
        color: '#6dc4a4',
        fontWeight: 'bold',
    },
    resultados: {
        alignSelf: 'center',
        color: 'lightgray',
        fontSize: 65,
        padding: 15,
    },
    txtSaida: {
        margin: RFValue(6),
        fontSize: RFValue(20),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'deepskyblue',
    },
    txtEntrada: {
        borderWidth: RFValue(4),
        textAlign: 'center',
        fontSize: RFValue(20),
        borderColor: '#1E90FF',
        // height: 50, 
        color: 'deepskyblue',
        borderRadius: RFValue(10),
        //   marginTop: RFValue(10), 
        padding: RFValue(10)
    },
    txtEntradaUsando: {
        borderColor: 'deepskyblue',
        outline: 'none',
    },
    textLabel: {
        fontSize: RFValue(15),
        fontWeight: 'bold',
        color: '#1E90FF',
    },
    txtTotal: {
        color: '#1E90FF',
        fontWeight: 'bold',
    }, 
    containerBotoes: {
        flexDirection: 'row', 
        justifyContent: 'space-between',                 
        width: '100%', 
        marginTop: RFValue(20),
        marginVertical: RFValue(20),
    }
});

export default styles;