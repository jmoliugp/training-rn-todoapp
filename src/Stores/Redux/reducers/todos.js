import actionTypes from '../actions/actionTypes';

const pendingItems = ['Cofee', 'Fruit'];
const doneItems = ['Monitors', 'Notebooks', 'PCs'];

const generateTodoId = () => Math.random();

const generateTodoList = (items, pending) => {
  return items.map((item) => {
    return { title: item, pending, id: generateTodoId() };
  });
};

const preloadItems = generateTodoList(pendingItems, true).concat(generateTodoList(doneItems, false));

const todos = (state = preloadItems, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.concat([action.todo]);
    case actionTypes.EDIT_TODO:
      return state.map((todo) => {
        return (todo.id === action.todo.id) ? action.todo : todo;
      });
    default:
      return state;
  }
};

export default todos;
