import React, { Component } from 'react';
import { Platform, View, Text, TextInput } from 'react-native';
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

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.props.navigator.setButtons(navButtons);
    this.state = {
      title: '',
    };
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'doneButton') {
        if (this.state.title) {
          this.props.handleNewItem(this.state.title);
        }
        this.props.navigator.dismissModal();
      }
      if (event.id === 'cancelButton') {
        this.props.navigator.dismissModal();
      }
    }
  }

  render() {
    return (
      <View >
        <Text >Enter new Item</Text>
        <TextInput
          onChangeText={(title) => { this.setState({ title }); }}
          value={this.state.title}
        />
      </View>
    );
  }
}
