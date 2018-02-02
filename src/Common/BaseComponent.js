import { Component } from 'react';
import Colors from '../Helpers/Colors';

class BaseComponent extends Component {
  static navigatorStyle = {
    navBarTextColor: Colors.white,
    navBarBackgroundColor: Colors.lightBlue,
    navBarButtonColor: Colors.white,
  }
}

export default BaseComponent;
