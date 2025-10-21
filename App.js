import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Constants from 'expo-constants';

import Atividade1 from './src/atividades/atv01';
import Atividade2 from './src/atividades/atv02';
import Atividade3 from './src/atividades/atv03';
import Atividade4 from './src/atividades/atv04';
import Atividade5 from './src/atividades/atv05';

//
import Exemplo01  from './src/exemplos/ex01';
import Exemplo02  from './src/exemplos/ex02';
import Exemplo03  from './src/exemplos/ex03';
import Exemplo04  from './src/exemplos/ex04';
import Exemplo05  from './src/exemplos/ex05';
import Exemplo06  from './src/exemplos/ex06';




export default function App() {
  return (
    <View style={styles.container}>
       <Exemplo06/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.StatusBarHeight,
    padding: 8,
  },
});
