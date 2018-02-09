import { observable, computed, action } from 'mobx';

const pendingItems = ['Cofee', 'Fruit'];
const doneItems = ['Monitors', 'Notebooks', 'PCs'];

const genTodos = (items, pending) => {
  return items.map((item) => {
    return { title: item, pending };
  });
};

const preloadItems = genTodos(pendingItems, true).concat(genTodos(doneItems, false));

class TodoStore {
  debugger;
  @observable todos = preloadItems;
  @observable selectedTodo = null;

  @computed get pendingItems() {
    return this.todos.filter(item => item.pending !== false);
  }
  @computed get doneItems() {
    return this.todos.filter(item => item.pending === false);
  }

  @action addTodo = (item) => {
    if (!this.todos.find(i => i.title === item.title)) {
      this.todos.push(item);
    }
  }

  @action removeTodo = (item) => {
    this.todos = this.todos.filter(i => i.title !== item.title);
  }

  @action editTodo = (item) => {
    this.todos = this.todos.map((i) => {
      return (i.title === item.title) ? item : i;
    });
  }

  @action selectTodo = (item) => {
    this.selectedTodo = item;
  }

  @action unSelectTodo = () => {
    this.selectedTodo = null;
  }
}

export default new TodoStore();
