import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Navigation } from 'react-native-navigation';
import BaseComponent from '../Common/BaseComponent';
import Colors from '../Helpers/Colors';

const buttonBaseStyle = {
  buttonColor: Colors.white,
  buttonFontSize: 15,
  buttonFontWeight: '600',
};

export default class NewItem extends BaseComponent {
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Done',
        id: 'doneButton',
        ...buttonBaseStyle,
      },
    ],
    leftButtons: [
      {
        title: 'Cancel',
        id: 'cancelButton',
        ...buttonBaseStyle,
      },
    ],
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
        Navigation.dismissModal();
      }
      if (event.id === 'cancelButton') {
        Navigation.dismissModal();
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
