import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './ItemList.styles';

const ItemList = (props) => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.item}>{props.todoItem.title}</Text>
      <View style={styles.buttonsView}>
        <Button
          onPress={() => props.showEditItem()}
          title="Edit"
          color="#841584"
        />
        <Button
          onPress={() => props.handleSwitch()}
          title="X"
          color={(props.todoItem.pending) ? 'green' : 'red'}
        />
      </View>
    </View>
  );
};

export default ItemList;
