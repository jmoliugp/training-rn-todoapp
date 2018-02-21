import types from './actionTypes';
import { todosLoadingStates } from '../../../Helpers/Enums';

export const addTodo = (title) => {
  const nextTodoId = Math.random();
  return {
    type: types.ADD_TODO,
    todo: {
      id: nextTodoId,
      title,
      pending: true,
    },
  };
};

export const editTodo = (todo) => {
  return {
    type: types.EDIT_TODO,
    todo,
  };
};

export const selectTodo = (todo) => {
  return {
    type: types.SELECT_TODO,
    todo,
  };
};


export const unselectTodo = () => {
  return {
    type: types.UNSELECT_TODO,
  };
};

export const todosLoadingStatus = (loadingStatus) => {
  switch (loadingStatus) {
    case todosLoadingStates.SUCCESFUL:
      return {
        type: types.TODOS_IS_LOADED,
        loadingStatus: todosLoadingStates.SUCCESFUL,
      };
    case todosLoadingStates.IN_PROGRESS:
      return {
        type: types.TODOS_IS_LOADING,
        loadingStatus: todosLoadingStates.IN_PROGRESS,
      };
    default:
      return {
        type: types.TODOS_HAS_FAILED,
        loadingStatus: todosLoadingStates.SUCCESFUL,
      };
  }
};

export const todosFetchDataSuccess = (todos) => {
  return {
    type: types.TODOS_FETCH_DATA_SUCCESS,
    todos,
  };
};

export const actionTypes = types;
