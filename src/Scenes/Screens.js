import { Navigation } from 'react-native-navigation';
import { HocNavBar } from '../Common';

import TodoList from './containers/TodoList';
import NewItem from './containers/NewItem';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('TodoApp.ListScreen', () => HocNavBar(TodoList), store, Provider);
  Navigation.registerComponent('TodoList.NewItem', () => HocNavBar(NewItem), store, Provider);
};

export default registerScreens;
