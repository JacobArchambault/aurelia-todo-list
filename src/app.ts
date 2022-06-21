import { TodoList } from "components/todo-list";

export class App {
  todoDescription = '';
  todoList : TodoList;

  addTodo() {
    if (this.todoDescription) {
      this.todoList.addOne(this.todoDescription);
      this.todoDescription = '';
    }
  }

}


