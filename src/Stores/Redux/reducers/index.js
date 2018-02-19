import { combineReducers } from 'redux';

import { todos, todosIsLoading, todosHasErrored } from './todos';
import selectedTodo from './selectedTodo';

const rootReducer = combineReducers({
  todos,
  selectedTodo,
  todosIsLoading,
  todosHasErrored,
});

export default rootReducer;
