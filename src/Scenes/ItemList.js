import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './ItemList.styles';

const ItemList = (props) => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.item}>{props.title}</Text>
      <Button
        onPress={() => props.handleSwitch(props.title)}
        title="X"
        color={(props.pending) ? 'green' : 'red'}
      />
    </View>
  );
};

export default ItemList;
