import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Platform, SectionList, Text } from 'react-native';

import { TodoStore } from '../Stores';
import ItemList from './ItemList';
import Colors from '../Helpers/Colors';
import styles from './TodoList.styles';

const sectionsHeaders = {
  pendingHeader: 'Pending',
  doneHeader: 'Done',
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

@observer
export default class TodoList extends Component {
  static navigatorStyle = {
    navBarTextColor: Colors.white,
    navBarBackgroundColor: Colors.lightBlue,
    navBarButtonColor: Colors.white,
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.props.navigator.setButtons(tabButtons);
  }

  //Navigation handlers

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

  showEditItem = () => {
    this.props.navigator.showModal({
      screen: 'TodoList.NewItem',
      title: 'Edit Item',
      passProps: {
        isEditable: true,
        handleNewItem: this.handleNewItem,
      },
      animationType: 'slide-up',
    });
  }

  //Store Handlers

  handleSwitch = (item) => {
    TodoStore.editTodo(item);
  }

  handleNewItem = (item) => {
    TodoStore.addTodo(item);
  }

  //Render functions

  renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>
      {section.title}
    </Text>
  );

  renderItem = ({ item }) => {
    return (
      <ItemList
        todoItem={item}
        handleSwitch={() => this.handleSwitch({ title: item.title, pending: !item.pending })}
        showEditItem={() => {
          TodoStore.selectTodo(item);
          this.showEditItem(item);
        }}
      />
    );
  }

  render = () => {
    const [pendingTodos, doneItems] = [TodoStore.pendingItems, TodoStore.doneItems];
    return (
      <SectionList
        sections={[
          { title: sectionsHeaders.pendingHeader, data: pendingTodos },
          { title: sectionsHeaders.doneHeader, data: doneItems },
        ]}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={item => item.title}
      />
    );
  }
}
