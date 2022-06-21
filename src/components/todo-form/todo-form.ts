import { TodoList } from 'components/todo-list/todo-list';

export class TodoForm {
  todoDescription = '';
  todoList: TodoList;

  addTodo() {
    if (this.todoDescription) {
      this.todoList.addOne(this.todoDescription);
      this.todoDescription = '';
    }
  }
}
