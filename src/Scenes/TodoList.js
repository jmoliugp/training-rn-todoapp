import React, { Component } from 'react';
import { SectionList, Text } from 'react-native';
import todoListStyles from './TodoList.styles';

export default class TodoList extends Component {
  render() {
    return (
      <SectionList
          sections={[
          {title: 'Pending', data: ['Cofee', 'Fruit']},
          {title: 'Done', data: ['Monitors', 'Notebooks', 'PCs']},
          ]}
          renderItem={({item}) => <Text style={todoListStyles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={todoListStyles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
      />
    );
  }
}
