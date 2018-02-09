import { observable, computed, action } from 'mobx';

const pendingItems = ['Cofee', 'Fruit'];
const doneItems = ['Monitors', 'Notebooks', 'PCs'];

const genTodoId = () => Math.random();

const genTodoList = (items, pending) => {
  return items.map((item) => {
    return { title: item, pending, id: genTodoId() };
  });
};

const preloadItems = genTodoList(pendingItems, true).concat(genTodoList(doneItems, false));

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
    if (!this.todos.find(i => i.id === item.id)) {
      this.todos.push(item);
    }
  }

  @action removeTodo = (item) => {
    this.todos = this.todos.filter(i => i.id !== item.id);
  }

  @action editTodo = (item) => {
    debugger;
    this.todos = this.todos.map((i) => {
      return (i.id === item.id) ? item : i;
    });
    debugger;
  }

  @action selectTodo = (item) => {
    this.selectedTodo = item;
  }

  @action unSelectTodo = () => {
    this.selectedTodo = null;
  }
}

export const Store = new TodoStore();
export const genId = genTodoId;
