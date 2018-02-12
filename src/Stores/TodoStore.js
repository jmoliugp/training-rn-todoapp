import { observable, computed, action } from 'mobx';

const pendingItems = ['Cofee', 'Fruit'];
const doneItems = ['Monitors', 'Notebooks', 'PCs'];

const generateTodoId = () => Math.random();

const genTodoList = (items, pending) => {
  return items.map((item) => {
    return { title: item, pending, id: generateTodoId() };
  });
};

const preloadItems = genTodoList(pendingItems, true).concat(genTodoList(doneItems, false));

class TodoStore {
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
    this.todos = this.todos.map(i => (i.id === item.id) ? item : i);
  }

  @action selectTodo = (item) => {
    this.selectedTodo = item;
  }

  @action unSelectTodo = () => {
    this.selectedTodo = null;
  }
}

export const Store = new TodoStore();
export const genId = generateTodoId;
