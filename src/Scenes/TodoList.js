import React from 'react';
import { SectionList, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import BaseComponent from '../Common/BaseComponent';
import ItemList from './ItemList';
import NewItem from './NewItem';
import Colors from '../Helpers/Colors';
import styles from './TodoList.styles';

const sectionsHeaders = {
  pendingHeader: 'Pending',
  doneHeader: 'Done',
};

const preloadItems = {
  pendingItems: ['Cofee', 'Fruit'],
  doneItems: ['Monitors', 'Notebooks', 'PCs'],
};

export default class TodoList extends BaseComponent {
  static navigatorButtons = {
    rightButtons: [
      {
        title: '+',
        id: 'addItem',
        buttonColor: Colors.white,
        buttonFontSize: 30,
        buttonFontWeight: '600',
      },
    ],
  };

  constructor(props) {
    super(props);
    const pendingItems = this.newItems(preloadItems.pendingItems, true);
    const doneItems = this.newItems(preloadItems.doneItems, false);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      items: pendingItems.concat(doneItems),
    };
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'addItem') {
        Navigation.showModal({
          screen: 'TodoList.NewItem',
          title: 'New Item',
          passProps: { handleNewItem: this.handleNewItem },
          animationType: 'slide-up',
        });
      }
    }
  }

  newItems = (items, pending) => {
    return items.map((item) => {
      return { title: item, pending };
    });
  };

  handleSwitch = (title) => {
    const itemsUpdated = this.state.items.map((item) => {
      const pending = (item.title === title) ? !item.pending : item.pending;
      return { title: item.title, pending };
    });
    this.setState({ items: itemsUpdated });
  }

  handleNewItem = (title) => {
    this.setState((prevState) => {
      const newState = prevState;
      newState.items.push({ title, pending: true });
      return newState;
    });
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

  renderNewItemModal = () => {
    return (
      <NewItem
        handleNewItem={this.handleNewItem}
      />
    );
  }

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
