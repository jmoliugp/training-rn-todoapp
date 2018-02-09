import React, { Component } from 'react';
import { Platform, View, Text, TextInput, Switch } from 'react-native';
import { observer } from 'mobx-react';

import deepcopy from 'deepcopy';

import { TodoStore } from '../Stores';
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
    this.state = (this.props.isEditable) ? TodoStore.selectedTodo : { title: '', pending: true };
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'doneButton') {
        if (this.state.title) {
          (this.props.isEditable) ? TodoStore.editTodo(this.state) : TodoStore.addTodo(this.state);
          TodoStore.unSelectTodo();
        }
        this.props.navigator.dismissModal();
      }
      if (event.id === 'cancelButton') {
        this.props.navigator.dismissModal();
      }
    }
  }

  handleNewTitle = (title) => {
    const newState = deepcopy(this.state);
    newState.title = title;
    this.setState(newState);
  }

  handleNewPending = (pending) => {
    const newState = deepcopy(this.state);
    newState.pending = pending;
    this.setState(newState);
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
          this.props.isEditable &&
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
