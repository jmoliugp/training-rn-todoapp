import actionTypes from '../actions/actionTypes';

const selectedTodo = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SELECT_TODO:
      return action.todo;
    case actionTypes.UNSELECT_TODO:
      return null;
    default:
      return state;
  }
};

export default selectedTodo;
