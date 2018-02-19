import React, { Component } from 'react';
import { Platform, SectionList, Text } from 'react-native';
import { connect } from 'react-redux';

import { selectTodo, editTodo } from '../../Stores/Redux/actions/index';
import { todosFetchSoloData, errorAfterFiveSeconds } from '../../Controllers/TodoListController';
import ItemList from '../presentations/ItemList';
import Colors from '../../Helpers/Colors';
import styles from '../styles/TodoList.styles';

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

class TodoList extends Component {
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

  componentDidMount() {
    this.props.fetchData('https://swapi.co/api/starships');
  }

  //Navigation handlers

  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'addItem') {
        this.props.navigator.showModal({
          screen: 'TodoList.NewItem',
          title: 'New Item',
          passProps: {
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
      passProps: {},
      animationType: 'slide-up',
    });
  }

  //Store Handlers

  handleSwitch = (todo) => {
    this.props.editTodo(todo);
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
        handleSwitch={() => {
          const newItem = { ...item };
          newItem.pending = !item.pending;
          this.handleSwitch(newItem);
        }}
        showEditItem={() => {
          this.props.selectTodo(item);
          this.showEditItem(item);
        }}
      />
    );
  }


  render = () => {
    const { pendingItems, doneItems } = this.props;
    return (
      <SectionList
        sections={[
          { title: sectionsHeaders.pendingHeader, data: pendingItems },
          { title: sectionsHeaders.doneHeader, data: doneItems },
        ]}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={item => item.id}
      />
    );
  }
}

const getPendingItems = todos => todos.filter(item => item.pending !== false);
const getDoneItems = todos => todos.filter(item => item.pending === false);

const mapStateToProps = (state) => {
  return {
    pendingItems: getPendingItems(state.todos),
    doneItems: getDoneItems(state.todos),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: url => dispatch(todosFetchSoloData(url)),
    editTodo: todo => dispatch(editTodo(todo)),
    selectTodo: todo => dispatch(selectTodo(todo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
