import { Navigation } from 'react-native-navigation';

import registerScreens from './Scenes/Screens';

const startApp = () => {
  registerScreens();
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'TodoApp.ListScreen',
      title: 'Todo List',
    },
  });
};

export default startApp;
