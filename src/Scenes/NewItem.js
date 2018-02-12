import React, { Component } from 'react';
import { Platform, View, Text, TextInput, Switch } from 'react-native';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';

import deepcopy from 'deepcopy';

import { TodoStore, genTodoId } from '../Stores';
import Colors from '../Helpers/Colors';

const buttonBaseStyle = {
  buttonColor: Colors.white,
  buttonFontSize: 15,
  buttonFontWeight: '600',
};

const navButtons = {
  rightButtons: [
    {
      ...Platform.select({
        ios: {
          id: 'doneButton',
          systemItem: 'done',
        },
        android: {
          title: 'Done',
          id: 'doneButton',
          ...buttonBaseStyle,
        },
      }),
    },
  ],
  leftButtons: [
    {
      ...Platform.select({
        ios: {
          id: 'cancelButton',
          systemItem: 'cancel',
        },
        android: {
          title: 'Cancel',
          id: 'cancelButton',
          ...buttonBaseStyle,
        },
      }),
    },
  ],
};

@observer
export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.props.navigator.setButtons(navButtons);
    this.state = toJS(TodoStore.selectedTodo) || { title: null, pending: true, id: genTodoId() };
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'doneButton') {
        if (this.state.title) {
          (TodoStore.selectedTodo) ? TodoStore.editTodo(this.state) : TodoStore.addTodo(this.state);
        }
        TodoStore.unSelectTodo();
        this.props.navigator.dismissModal();
      }
      if (event.id === 'cancelButton') {
        TodoStore.unSelectTodo();
        this.props.navigator.dismissModal();
      }
    }
  }

  handleNewTitle = (title) => {
    this.setState({ ...this.state, title });
  }

  handleNewPending = (pending) => {
    this.setState({ ...this.state, pending });
  }

  render() {
    return (
      <View >
        <Text >Enter new Item</Text>
        <TextInput
          onChangeText={(title) => { this.handleNewTitle(title); }}
          value={this.state.title}
        />
        {
          TodoStore.selectedTodo &&
          <View >
            <Text >Pending</Text>
            <Switch
              onValueChange={(pending) => { this.handleNewPending(pending); }}
              value={this.state.pending}
            />
          </View >
        }
      </View>
    );
  }
}
