import React from 'react';
import { Text, View } from 'react-native';
import headerBarStyles from './HeaderBar.styles';

function HeaderBar() {
  return (
    <View style={headerBarStyles.headerBarView}>
      <View style={headerBarStyles.headerBarTextContainer}>
        <Text style={headerBarStyles.headerBarText}>
            TodoApp
        </Text>
      </View>
    </View>
  );
}

export default HeaderBar;
