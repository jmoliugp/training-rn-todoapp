import React from 'react';
import { View } from 'react-native';
import TodoList from './TodoList';
import HeaderBar from '../Common/HeaderBar';

const App = () => {
  return (
    <View style={{ flex: 1, paddingTop: 22 }}>
      <HeaderBar />
      <TodoList />
    </View>
  );
};

export default App;
