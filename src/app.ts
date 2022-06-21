import { Todo } from './interfaces/todo';

export class App {
  todos: Todo[] = [];
  todoDescription = '';

  addTodo() {
    if (this.todoDescription) {
      this.addOne(this.todoDescription);
      this.todoDescription = '';
    }
  }

  private addOne(todoDescription: string) {
    this.todos.push({
      description: todoDescription,
      done: false
    });
  }

  removeTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
