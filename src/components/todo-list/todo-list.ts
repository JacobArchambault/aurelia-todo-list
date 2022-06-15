import { Todo } from '../../interfaces/todo';

export class TodoList {
  todos: Todo[] = [];
  todoDescription = '';

  addTodo() {
    if (this.todoDescription) {
      this.addOne();
      this.todoDescription = '';
    }
  }

  private addOne() {
    this.todos.push({
      description: this.todoDescription,
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
