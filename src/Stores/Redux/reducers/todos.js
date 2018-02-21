import actionTypes from '../actions/actionTypes';

const todosUpdateList = (state = [], action) => {
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

export default todosUpdateList;
