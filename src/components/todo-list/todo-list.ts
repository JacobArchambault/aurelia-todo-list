import { Todo } from '../../interfaces/todo';

export class TodoList {
  todos: Todo[] = [
    { description: "Make bed", done: true },
    { description: "Take out trash", done: false }
  ];
  todoDescription = '';

  addTodo() {
    if (this.todoDescription) {
      this.create(this.todoDescription);
      this.todoDescription = '';
    }
  }

  private create(todoDescription: string) {
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
