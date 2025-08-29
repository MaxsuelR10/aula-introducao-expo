import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from './src/atividades/atv01'

import Atividades from './src/atividades/atv01';

import { RFPercentage } from 'react-native-responsive-fontsize';


export default function App() {
  return (
    <View style={styles.container}>
       <Atividades/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding:RFPercentage (2.5),
    paddingTop: Constants.StatusBarHeight,
  },
});
