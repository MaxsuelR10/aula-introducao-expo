import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Atividades from './src/atividades/atv01';
import Atividades from './src/atividades/atv02';
//
import Exemplo02  from './src/exemplos/ex02';

import { RFPercentage } from 'react-native-responsive-fontsize';


export default function App() {
  return (
    <View style={styles.container}>
       <Exemplo02/>
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
