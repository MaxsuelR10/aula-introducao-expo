import { View, Text, Image} from 'react-native';

import styles from './styles';

import img from '../../../assets/002-1-react-native.png';


function Atividade02() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Image source={img} style={styles.imagem}/>

            <Mensagem titulo={''}>Você não clicou corretamente!</Mensagem>
            <Mensagem titulo={''}>Acesso permitido</Mensagem>
            <Mensagem titulo={''}>O tempo acabou</Mensagem>
        </View>
    );
}

export default Atividade02;