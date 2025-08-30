import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue} from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor: '#ff0',
        },
        titulo: {
            textAlign: 'center',
            fontSize:RFPercentage(5),
            fontFamily: 'Montserrat-Bold',
            fontWeight: 'bold',
            color: '#777',
        },
        txt: {
            fontSize:RFPercentage(2.5),
            textAlign: 'center',
        },
        aula: {
            textAlign:'center',
            fontSize:RFPercentage(3),
            color:'#0f9',
        },
          outro: {
            textAlign: 'left',
            fontSize:RFPercentage(3),
            color:'#f0f',
            
        }
    }
);
export default styles;
