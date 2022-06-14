import { Todo } from './interfaces/todo';

export class App {
  todos: Todo[] = [];
  todoDescription = '';

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false
      });
      this.todoDescription = '';
    }
  }

  removeTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
