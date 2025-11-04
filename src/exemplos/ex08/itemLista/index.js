import { TouchableOpacity, Text } from "react-native";
import MaterilIcons from '@expo/vector-icons/MaterialIcons';


import styles from "./styles";

export default function itemLista({children, id, deleteItem}) {

  return(
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txtItem}>{children}</Text>
      <MaterilIcons 
      name="delete-outline" 
      size={26} 
      color="#FF149"
      onPress={() => deleteItem(id)} />
      </TouchableOpacity>
  );
}