import React, { Component } from 'react';
import { View, Platform, SectionList, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { selectTodo, editTodo } from '../../Stores/Redux/actions/index';
import { getStarships } from '../../Networking/controllers/StarWarsApi';
import ItemList from '../presentations/ItemList';
import { Colors, TodosLoadingStates } from '../../Helpers';
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
    this.props.fetchData();
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

  renderActivityIndicator = () => {
    return <ActivityIndicator size="large" color={Colors.blueLike} />;
  }

  renderSectionList = () => {
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

  renderSelect = () => {
    switch (this.props.todosStatus) {
      case TodosLoadingStates.SUCCESFUL:
        return this.renderSectionList();
      case TodosLoadingStates.IN_PROGRESS:
        return this.renderActivityIndicator();
      default:
        return this.renderSectionList(); //CHANGE
    }
  }

  render = () => {
    return (
      <View style={styles.container}>
        {this.renderSelect()}
      </View>
    );
  }
}

const getPendingItems = todos => todos.filter(item => item.pending !== false);
const getDoneItems = todos => todos.filter(item => item.pending === false);

const mapStateToProps = (state) => {
  return {
    pendingItems: getPendingItems(state.todos),
    doneItems: getDoneItems(state.todos),
    todosStatus: state.todosStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getStarships),
    editTodo: todo => dispatch(editTodo(todo)),
    selectTodo: todo => dispatch(selectTodo(todo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
