import { TodoList } from 'elements/todo-list/todo-list';

export class TodoForm {
  private todoDescription = '';
  private todoList: TodoList;

  addTodo() {
    if (this.todoDescription) {
      this.todoList.addOne(this.todoDescription);
      this.todoDescription = '';
    }
  }
}
