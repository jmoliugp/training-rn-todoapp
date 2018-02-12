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
        />
        <Button
          style={styles.editButton}
          onPress={() => props.handleSwitch()}
          title="X"
          color={(props.todoItem.pending) ? 'green' : 'red'}
        />
      </View>
    </View>
  );
};

export default ItemList;
