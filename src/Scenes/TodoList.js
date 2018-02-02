import React, { Component } from 'react';
import { SectionList, Text } from 'react-native';
import ItemList from './ItemList';
import styles from './TodoList.styles';

const sectionsHeaders = {
  pendingHeader: 'Pending',
  doneHeader: 'Done',
};

const prelaodItems = {
  pendingItems: ['Cofee', 'Fruit'],
  doneItems: ['Monitors', 'Notebooks', 'PCs'],
};

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    const pendingItems = this.newItems(prelaodItems.pendingItems, true);
    const doneItems = this.newItems(prelaodItems.doneItems, false);
    this.state = {
      items: pendingItems.concat(doneItems),
    };
  }

  newItems = (items, pending) => {
    return items.map((item) => {
      return { title: item, pending };
    });
  };

  handleSwitch = (title) => {
    const itemsUpdated = this.state.items.reduce((accumItems, item) => {
      const pending = (item.title === title) ? !item.pending : item.pending;
      return { title, pending };
    });
    this.setState({ items: itemsUpdated });
  }

  renderItem = ({ item }) => {
    return (
      <ItemList
        title={item.title}
        pending={item.pending}
        handleSwitch={this.handleSwitch}
      />
    );
  }

  renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>
      {section.title}
    </Text>
  );

  render() {
    return (
      <SectionList
        sections={[
          { title: sectionsHeaders.pendingHeader, data: this.state.items.filter(item => item.pending === true) },
          { title: sectionsHeaders.doneHeader, data: this.state.items.filter(item => item.pending === false) },
        ]}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={item => item.title}
      />
    );
  }
}
