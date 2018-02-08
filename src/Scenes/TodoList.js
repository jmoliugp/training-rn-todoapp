import React, { Component } from 'react';
import { Platform, SectionList, Text } from 'react-native';
import deepcopy from 'deepcopy';
import ItemList from './ItemList';
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

const tabButtons = {
  rightButtons: [
    {
      ...Platform.select({
        ios: {
          id: 'addItem',
          systemItem: 'add',
        },
        android: {
          title: '+',
          id: 'addItem',
          buttonColor: Colors.white,
          buttonFontSize: 30,
          buttonFontWeight: '600',
        },
      }),
    },
  ],
};

export default class TodoList extends Component {

  static navigatorStyle = {
    navBarTextColor: Colors.white,
    navBarBackgroundColor: Colors.lightBlue,
    navBarButtonColor: Colors.white,
  }

  constructor(props) {
    super(props);
    const pendingItems = this.newItems(preloadItems.pendingItems, true);
    const doneItems = this.newItems(preloadItems.doneItems, false);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.props.navigator.setButtons(tabButtons);
    this.state = {
      items: pendingItems.concat(doneItems),
    };
  }

  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'addItem') {
        this.props.navigator.showModal({
          screen: 'TodoList.NewItem',
          title: 'New Item',
          passProps: {
            handleNewItem: this.handleNewItem,
          },
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
      const newState = deepcopy(prevState);
      newState.items.push({ title, pending: true });
      return newState;
    });
  }

  renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>
      {section.title}
    </Text>
  );

  renderItem = ({ item }) => {
    return (
      <ItemList
        title={item.title}
        pending={item.pending}
        handleSwitch={this.handleSwitch}
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
