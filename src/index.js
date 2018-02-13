import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerScreens from './Scenes/Screens';

let store = createStore(todoApp);

const startApp = () => {
  registerScreens(Provider, store);
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'TodoApp.ListScreen',
      title: 'Todo List',
    },
  });
};

export default startApp;
