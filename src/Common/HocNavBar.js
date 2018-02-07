import React, { Component } from 'react';
import { Colors } from '../Helpers';

const withNavBar = (WrappedComponent) => {
  return class extends Component {
      static navigatorStyle = {
        navBarTextColor: Colors.white,
        navBarBackgroundColor: Colors.lightBlue,
        navBarButtonColor: Colors.white,
      }

      static navigatorButtons = WrappedComponent.navigatorButtons;

      render() {
        return <WrappedComponent {...this.props} />;
      }
  };
};

export default withNavBar;
