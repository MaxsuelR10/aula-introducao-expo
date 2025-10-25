import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

export default function Exemplo6() {
  const [massa, setMassa] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  function Calcular() {
    const m = parseFloat(massa);
    const a = parseFloat(altura);

    // Verificação de entradas válidas
    if (!m || !a) {
      Alert.alert('Erro', 'Por favor, preencha massa e altura corretamente.');
      return;
    }

    const valor = m / (a * a);
    setResultado(valor);

    // Classificação com if/else
    if (valor < 18.5) {
      setClassificacao('Abaixo do peso');
      Alert.alert('Resultado', 'Você está abaixo do peso!');
    } 
    else if (valor >= 18.5 && valor < 24.9) {
      setClassificacao('Peso normal');
      Alert.alert('Resultado', 'Seu peso está normal!');
    } 
    else if (valor >= 25 && valor < 29.9) {
      setClassificacao('Sobrepeso');
      Alert.alert('Resultado', 'Você está com sobrepeso!');
    } 
    else if (valor >= 30 && valor < 34.9) {
      setClassificacao('Obesidade grau I');
      Alert.alert('Resultado', 'Você está com obesidade grau I!');
    } 
    else if (valor >= 35 && valor < 39.9) {
      setClassificacao('Obesidade grau II');
      Alert.alert('Resultado', 'Você está com obesidade grau II!');
    } 
    else {
      setClassificacao('Obesidade grau III');
      Alert.alert('Resultado', 'Você está com obesidade grau III!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo 6 - Cálculo de IMC</Text>

      <View style={styles.entradaImc}>
        <TextInput
          placeholder="Massa (kg)"
          placeholderTextColor="lightgray"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={setMassa}
          value={massa}
        />
        <TextInput
          placeholder="Altura (m)"
          placeholderTextColor="lightgray"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={setAltura}
          value={altura}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={Calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== null && (
        <View>
          <Text style={styles.resultados}>
            Seu IMC: {resultado.toFixed(2)}
          </Text>
          <Text style={styles.resultados}>
            Classificação: {classificacao}
          </Text>
        </View>
      )}
    </View>
  );
}
