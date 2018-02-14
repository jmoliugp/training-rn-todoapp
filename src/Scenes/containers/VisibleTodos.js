import { connect } from 'react-redux';
import { addTodo, editTodo } from '../../Stores/Redux/actions/index';
import TodoList from '../components';

const pendingItems = todos => todos.filter(item => item.pending !== false);
const doneItems = todos => todos.filter(item => item.pending === false);

const mapStateToProps = (state) => {
  return {
    pendingItems: pendingItems(state.todos),
    doneItems: doneItems(state.todos),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: title => dispatch(addTodo(title)),
    editTodo: todo => dispatch(editTodo(todo)),
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
