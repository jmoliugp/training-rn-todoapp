import React, { Component } from 'react';
import { SectionList, Text, View } from 'react-native';
import appStyles from './App.styles';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={appStyles.container}>
        <HeaderBar />
        <SectionList
          sections={[
            {title: 'Pending', data: ['Cofee', 'Fruit']},
            {title: 'Done', data: ['Monitors', 'Notebooks', 'PCs']},
          ]}
          renderItem={({item}) => <Text style={appStyles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={appStyles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

function HeaderBar() {
  return (
    <View style={appStyles.headerBar}>
      <View style={appStyles.headerBarTextContainer}>
        <Text style={appStyles.headerBarText}>
          TodoApp
        </Text>
      </View>
    </View>
  );
}
