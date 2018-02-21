import { combineReducers } from 'redux';

import todos from './todos';
import selectedTodo from './selectedTodo';
import todosStatus from './todosStatus';

const rootReducer = combineReducers({
  todos,
  selectedTodo,
  todosStatus,
});

export default rootReducer;
