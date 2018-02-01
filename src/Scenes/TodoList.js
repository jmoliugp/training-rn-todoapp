import React, { Component } from 'react';
import { SectionList, Text, Button, View } from 'react-native';
import todoListStyles from './TodoList.styles';

const sectionsHeaders = {
  pendingHeader: 'Pending',
  doneHeader: 'Done',
};

const newItems = (items, pending) => {
  return items.map(item => new Item(item, pending));
};

class Item {
  constructor(title, pending) {
    this.title = title;
    this.pending = pending;
  }
}

const prelaodItems = {
  pendingItems: ['Cofee', 'Fruit'],
  doneItems: ['Monitors', 'Notebooks', 'PCs'],
};

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    const pendingItems = newItems(prelaodItems.pendingItems, true);
    const doneItems = newItems(prelaodItems.doneItems, false);
    this.state = {
      items: pendingItems.concat(doneItems),
    };
  }
  handleSwitch = (title) => {
    const itemsUpdated = this.state.items.reduce((accumItems, item) => {
      const pendingState = (item.title === title) ? !item.pending : item.pending;
      accumItems.push(new Item(item.title, pendingState));
      return accumItems;
    }, []);
    this.setState({ items: itemsUpdated });
  }
  RenderItem = (props) => {
    return (
      <View style={todoListStyles.itemView}>
        <Text style={todoListStyles.item}>{props.title}</Text>
        <Button
          onPress={() => props.handleSwitch(props.title)}
          title="X"
          color={(props.pending) ? 'green' : 'red'}
        />
      </View>
    );
  }
  renderItems = ({ item }) => {
    return (
      <this.RenderItem
        title={item.title}
        pending={item.pending}
        handleSwitch={this.handleSwitch}
      />
    );
  }
  renderSectionHeader = ({ section }) => <Text style={todoListStyles.sectionHeader}>{section.title}</Text>
  render() {
    return (
      <SectionList
        sections={[
        { title: sectionsHeaders.pendingHeader, data: this.state.items.filter(item => item.pending === true) },
        { title: sectionsHeaders.doneHeader, data: this.state.items.filter(item => item.pending === false) },
        ]}
        renderItem={this.renderItems}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={item => item.title}
      />
    );
  }
}
