import actionTypes from '../actions/actionTypes';

const pendingItems = ['Cofee', 'Fruit'];
const doneItems = ['Monitors', 'Notebooks', 'PCs'];

const generateTodoId = () => Math.random();

const genTodoList = (items, pending) => {
  return items.map((item) => {
    return { title: item, pending, id: generateTodoId() };
  });
};

const preloadItems = genTodoList(pendingItems, true).concat(genTodoList(doneItems, false));

const todos = (state = preloadItems, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.concat([action.todo]);
    case actionTypes.EDIT_TODO:
      return state.map((todo) => {
        return (todo.id === action.todo.id) ? action.todo.id : todo;
      });
    default:
      return state;
  }
};

export default todos;
