import actionTypes from '../actions/actionTypes';

const todosUpdateStatus = (state = null, action) => {
  switch (action.type) {
    case actionTypes.TODOS_IS_LOADED:
      return action.loadingStatus;
    case actionTypes.TODOS_IS_LOADING:
      return action.loadingStatus;
    case actionTypes.TODOS_HAS_FAILED:
      return action.loadingStatus;
    default:
      return state;
  }
};

export default todosUpdateStatus;
