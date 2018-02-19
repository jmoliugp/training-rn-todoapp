import types from './actionTypes';

let nextTodoId = 0;

export const addTodo = (title) => {
  nextTodoId = Math.random();
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

export const todosHasErrored = (bool) => {
  return {
    type: types.TODOS_HAS_ERRORED,
    hasErrored: bool,
  };
};

export const todosIsLoading = (bool) => {
  return {
    type: types.TODOS_IS_LOADING,
    isLoading: bool,
  };
};

export const todosFetchDataSuccess = (todos) => {
  return {
    type: types.TODOS_FETCH_DATA_SUCCESS,
    todos,
  };
};

export const actionTypes = types;
