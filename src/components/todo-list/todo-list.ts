import { Todo } from '../../interfaces/todo';

export class TodoList {
  todos: Todo[] = [
    { description: "Make bed", done: true },
    { description: "Take out trash", done: false }
  ];

  addOne(todoDescription: string) {
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
