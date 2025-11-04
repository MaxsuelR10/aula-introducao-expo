import { Button, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: RFValue(10),
        paddingBottom: RFValue(2),
        borderBottomWidth: RFValue(3),
        borderColor: 'deepskyblue',
        width: '100%',
        
    },
    txtItem: {
        fontSize: RFValue(16),
    },
    cabecalho: {
        backgroundColor: 'deepskyblue',
        width:'100%',
        padding: RFPercentage(2),
        alignItems: 'center',
        color: '#fafafa',
        fontSize: RFValue(20),
        textAlign: 'center',
    },
    lista: {
        marginTop: RFValue(10),
        width: '100%',
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