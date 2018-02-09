import { observable, computed } from 'mobx';

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

  @computed get pendingItems() {
    return this.todos.filter(item => item.pending !== false);
  }
  @computed get doneItems() {
    return this.todos.filter(item => item.pending === false);
  }

  addTodo = (item) => {
    if (!this.todos.find(i => i.title === item.title)) {
      this.todos.push(item);
    }
  }

  removeTodo = (item) => {
    this.todos = this.todos.filter(i => i.title !== item.title);
  }

  editTodo = (item) => {
    this.todos = this.todos.map((i) => {
      return (i.title === item.title) ? item : i;
    });
  }
}

export default new TodoStore();
