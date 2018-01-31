import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <View style={styles.headerBarTextContainer}>
            <Text style={styles.headerBarText}>
              TodoApp
            </Text>
          </View>
        </View>
        <SectionList
          sections={[
            {title: 'Pending', data: ['Cofee', 'Fruit']},
            {title: 'Done', data: ['Monitors', 'Notebooks', 'PCs']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  headerBar: {
    flex: 0,
    flexBasis: 50,
    height: 50,
    backgroundColor: 'steelblue',
  },
  headerBarTextContainer: {
    flex: 85,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  headerBarText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'verdana',
    fontSize: 30,
  },
  headerBarButtonContainer: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  headerBarButton: {
    color: 'white',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);
