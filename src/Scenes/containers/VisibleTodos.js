import { connect } from 'react-redux';
import { toggleTodo } from '../../Stores/Redux/actions/index';
import TodoList from '../components/TodoList';

const pendingItems = todos => todos.filter(item => item.pending !== false);
const doneItems = todos => todos.filter(item => item.pending === false);

const mapStateToProps = (state) => {
  return {
    pendingItems: pendingItems(state.todos),
    doneItems: doneItems(state.todos),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList