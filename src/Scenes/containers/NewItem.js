import React, { Component } from 'react';
import { Platform, View, Text, TextInput, Switch } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, editTodo, unselectTodo } from '../../Stores/Redux/actions';
import { Colors } from '../../Helpers';

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

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.props.navigator.setButtons(navButtons);
    this.state = {
      todo: { ...this.props.selectedTodo } || { title: null },
    };
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'doneButton') {
        if (this.state.todo.title) {
          (this.props.selectedTodo) ? this.props.editTodo(this.state.todo) : this.props.addTodo(this.state.todo.title);
        }
        this.props.unselectTodo();
        this.props.navigator.dismissModal();
      }
      if (event.id === 'cancelButton') {
        this.props.unselectTodo();
        this.props.navigator.dismissModal();
      }
    }
  }

  handleNewTitle = (title) => {
    this.setState({ todo: { ...this.state.todo, title } });
  }

  handleNewPending = (pending) => {
    this.setState({ todo: { ...this.state.todo, pending } });
  }

  render() {
    return (
      <View >
        <Text >Enter new Item</Text>
        <TextInput
          onChangeText={(title) => { this.handleNewTitle(title); }}
          placeholder="Title"
          value={this.state.todo.title}
        />
        {
          this.props.selectedTodo &&
          <View >
            <Text >Pending</Text>
            <Switch
              onValueChange={(pending) => { this.handleNewPending(pending); }}
              value={this.state.todo.pending}
            />
          </View >
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTodo: state.selectedTodo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: title => dispatch(addTodo(title)),
    editTodo: todo => dispatch(editTodo(todo)),
    unselectTodo: () => dispatch(unselectTodo()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewItem);
