import { View, Text} from 'react-native';

import styles from './styles';

export default function Atividades() {
    return(
        <View style={styles.container}>
          <Text style={styles.titulo}>Atividade 01</Text>
            <Text style={styles.txt}>Introdução React Native com Expo.</Text>
            <Text style={styles.txtaula}>Com o Ewerton corinthiano, </Text>
            <Text style={styles.txtaula}>Na sexta feira daquele jeito.</Text>
            <Text style={styles.txtoutro}>Resumão.</Text>

        </View>
    );
}