import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { Colors } from '../Helpers';

const CustomActivityIndicator = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={Colors.blueLike} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default CustomActivityIndicator;
