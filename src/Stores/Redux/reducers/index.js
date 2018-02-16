import { combineReducers } from 'redux';
import todos from './todos';
import selectedTodo from './selectedTodo';

const todoApp = combineReducers({
  todos,
  selectedTodo,
});

export default todoApp;
