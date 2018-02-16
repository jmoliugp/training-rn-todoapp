import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import todoApp from './Stores/Redux/reducers';

import registerScreens from './Scenes/Screens';

let store = createStore(
  todoApp,
  devToolsEnhancer(),
);

const startApp = () => {
  registerScreens(store, Provider);
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'TodoApp.ListScreen',
      title: 'Todo List',
    },
  });
};

export default startApp;
