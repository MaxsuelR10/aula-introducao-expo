import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue} from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor: '#ff0',
            alignItems: 'center',
        },
        titulo: {
            fontSize:RFPercentage(5),
            fontFamily: 'Montserrat-Bold',
            fontWeight: 'bold',
            color: '#777',
        },
        txt: {
            fontSize:RFPercentage(2.5),
        },
        txtaula: {
            fontSize:RFPercentage(3),
            color:'#0f9',
        },
          txtoutro: {
            fontSize:RFPercentage(3),
            color:'#f0f',
            textAlign: 'left',
        }
    }
);
export default styles;
