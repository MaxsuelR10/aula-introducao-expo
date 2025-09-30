import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export default function Exemplo05() {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function Soma() {
        setTotal(n1 + n2);
    }

    return(
        <View style={ styles.container}>
            <Text style={styles.paragraph}>
                Exemplo 5
            </Text>
            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <TextInput style={styles.txtEntrada}
            onChangeText={ (entrada) => setN1(entrada)}
            value={n1} />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}> 2º número </Text>
            <TextInput style={styles.txtEntrada}
            onChangeText={ (entrada) => setN2(entrada)}
            value={n2} />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput style={styles.txtEntrada}
            editable={false}
            value={total} />

            <TouchableOpacity style={ styles.button} onPress={() => Soma()}>
                <Text style={styles.txtButton}> + </Text>
            </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#FF80AB',
            padding: 8,
        },
        paragraph: {
            margin: 6,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#C51162'
        },
        txtSaida: {
            margin: 6,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#E91E63',
        },
        txtEntrada: {
            borderWidth: 4,
            textAlign: 'center',
            fontSize: 22,
            borderColor: '#E91E63',
            height: 40,
            color: '#E53935',
            borderRadius: 10,
            marginTop: 10,
        },
        button: {
            backgroundColor: '#E91E63',
            height: 40,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
        },
        txtButton: {
            fontSize: 22,
            color: '#FF80AB',
            textAlign: 'center',
        },
        textLabel: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#c51162',
        },  
    });
