import React, { Component } from 'react';
import { View } from 'react-native';
import appStyles from './App.styles';
import TodoList from './TodoList';
import HeaderBar from '../Common/HeaderBar';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={appStyles.container}>
        <HeaderBar />
        <TodoList />
      </View>
    );
  }
}
