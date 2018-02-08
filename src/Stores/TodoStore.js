import { observable, computed } from 'mobx-react';

const pendingItems = ['Cofee', 'Fruit'];
const doneItems = ['Monitors', 'Notebooks', 'PCs'];

const genTodos = (items, pending) => {
  return items.map((item) => {
    return { title: item, pending };
  });
};

const preloadItems = genTodos(pendingItems).concat(genTodos(doneItems));

class ObservableTodoStore {
  @observable items = preloadItems;

  @computed get pendingItems() {
    return this.todos.filter(item => item.pending !== false);
  }
  @computed get doneItems() {
    return this.todos.filter(item => item.pending === false);
  }

  addTodo = (item) => {
    this.todos.push(item);
  }

  removeTodo = (item) => {
    this.todos = this.todos.filter(i => i.title !== item.title);
  }

  editTodo = (item) => {
    this.removeTodo(item);
    this.addTodo(item);
  }
}

const observableTodoStore = new ObservableTodoStore();
