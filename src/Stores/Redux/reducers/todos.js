import actionTypes from '../actions/actionTypes';

export const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.concat([action.todo]);
    case actionTypes.EDIT_TODO:
      return state.map((todo) => {
        return (todo.id === action.todo.id) ? action.todo : todo;
      });
    case actionTypes.TODOS_FETCH_DATA_SUCCESS:
      return action.todos;
    default:
      return state;
  }
};

export const todosHasErrored = (state = false, action) => {
  switch (action.type) {
    case actionTypes.TODOS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
};

export const todosIsLoading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.TODOS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
};
