import types from './actionTypes';

let nextTodoId = 0;

export const addTodo = (title) => {
  nextTodoId = Math.random();
  debugger;
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
  debugger;
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

export const actionTypes = types;
