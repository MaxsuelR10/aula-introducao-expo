import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Constants from 'expo-constants';

import Atividade1 from './src/atividades/atv01';
import Atividade2 from './src/atividades/atv02';
//
import Exemplo02  from './src/exemplos/ex02';
import Exemplo04  from './src/exemplos/ex04';




export default function App() {
  return (
    <View style={styles.container}>
       <Exemplo04/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding:RFPercentage (2.5),
    paddingTop: Constants.StatusBarHeight,
  },
});
