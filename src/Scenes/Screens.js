import { Navigation } from 'react-native-navigation';
import { HocNavBar } from '../Common';

import TodoList from './TodoList';
import NewItem from './NewItem';

const registerScreens = () => {
  Navigation.registerComponent('TodoApp.ListScreen', () => HocNavBar(TodoList));
  Navigation.registerComponent('TodoList.NewItem', () => HocNavBar(NewItem));
};

export default registerScreens;
