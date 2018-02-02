import { Navigation } from 'react-native-navigation';

import TodoList from './TodoList';
import NewItem from './NewItem';

const registerScreens = () => {
  Navigation.registerComponent('TodoApp.ListScreen', () => TodoList);
  Navigation.registerComponent('TodoList.NewItem', () => NewItem);
};

export default registerScreens;
