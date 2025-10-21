import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Atividade5() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function Soma() {
        setTotal(parseInt(n1) + parseInt(n2));
    }

    function Sub() {
        setTotal(parseInt(n1) - parseInt(n2));
    }

    function Div() {
        setTotal(parseInt(n1) / parseInt(n2));
    }

    function Mult() {
        setTotal(parseInt(n1) * parseInt(n2));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>Atividade 5</Text>
            <Text style={styles.txtSaida}>Calculadora básica funcional</Text>

            <Text style={styles.textLabel}>1º número</Text>
            <TextInput
                style={styles.txtEntrada}
                onChangeText={(entrada) => setN1(entrada)}
                value={n1.toString()}
                keyboardType="numeric"
            />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}>2º número</Text>
            <TextInput
                style={styles.txtEntrada}
                onChangeText={(entrada) => setN2(entrada)}
                value={n2.toString()}
                keyboardType="numeric"
            />

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}>Total</Text>
            <Text style={styles.txtEntrada}>{total}</Text>

            <View style={styles.butoes}>
                <TouchableOpacity style={styles.button} onPress={Soma}>
                    <Text style={styles.txtButton}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={Sub}>
                    <Text style={styles.txtButton}> - </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={Div}>
                    <Text style={styles.txtButton}> / </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={Mult}>
                    <Text style={styles.txtButton}> * </Text>

                </TouchableOpacity>
                
            </View>

        </View>

    );
}
