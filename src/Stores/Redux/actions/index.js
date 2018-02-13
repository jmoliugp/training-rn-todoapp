import types from './actionTypes';

let nextTodoId = 0;

export const addTodo = (title) => {
  nextTodoId += 1;
  return {
    type: types.addTodo,
    todo: {
      id: nextTodoId,
      title,
      pending: true,
    },
  };
};

export const editTodo = (id) => {
  return {
    type: types.editTodo,
    id,
  };
};

export const selectTodo = (todo) => {
  return {
    type: types.selectedTodo,
    todo,
  };
};

export const unSelectTodo = () => {
  return {
    type: types.unSelectTodo,
  };
};

export const actionTypes = types;
