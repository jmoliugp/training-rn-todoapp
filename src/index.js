import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';

import rootReducer from './Stores/Redux/reducers';

import registerScreens from './Scenes/Screens';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  // devToolsEnhancer(),
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
