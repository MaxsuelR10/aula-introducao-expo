import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        paddingTop: 40,               
        backgroundColor: '#F2F6FF',
        paddingHorizontal: 20,
    },
    paragraph: {
        marginBottom: 10,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#003366',
    },
    txtSaida: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#003366',
        marginVertical: 10,
    },
    txtEntrada: {
        borderWidth: 2,
        borderBlockColor: '#0077CC',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 18,
        Color: '#003366',
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#0077CC',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,

    },
    txtButton: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#004080',
        marginTop: 15,
        marginBottom: 5,
    },

    butoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 30,
        gap: 15,
    },
});

export default styles;
