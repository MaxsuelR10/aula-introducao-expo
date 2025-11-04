import { useState } from "react";
import { View, Text, FlatList }  from "react-native";
import uuid from 'react-native-uuid'
import itemLista from "./itemLista";
import styles from "./styles";

export default function Exemplo08() {

  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Leite integral'},
    { id: uuid.v4(), text: 'Pão de forma'},
    { id: uuid.v4(), text: 'Nescau'},
    { id: uuid.v4(), text: 'Manteiga'},
  ]); // [] array ou lista de itens

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 8</Text>
      <Text style={styles.cabecalho}>Lista de compras</Text>
      <FlatList 
       data={items}
       renderItem={({item}) => 
       <itemLista id={item.id} deleteItem={deleteItem}>
        {item.text}
        </itemLista>}

       style={styles.lista}
      />
    </View>
  );
}