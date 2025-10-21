import { useState } from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Exemplo6() {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultados, setResultado] = useState(0);

    function Calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);
    }
    return(

<View style={styles.container}>
    <Text style={styles.paragraph}> Exemplo 6 </Text>

    <View style={styles.entradaImc}>
        <TextInput placeholder='Massa'
         placeholderTextColor='lightgray'
         keyboardType='numeric'
         style={styles.input} 
         onChangeText={(entrada) => setMassa(entrada)}
         />
        <TextInput placeholder='Altura'
         placeholderTextColor='lightgray'
         keyboardType='numeric'
         style={styles.input}
         onChangeText={(entrada) => setAltura(entrada)}
         />
    </View>


<TouchableOpacity style={styles.button} onPress={() => Calcular ()}>
    <Text style={styles.buttonText}> Calcular </Text>
</TouchableOpacity>
<Text style={styles.resultados}>Teste{resultados.toFixed(2)}</Text>
</View>
);
}
