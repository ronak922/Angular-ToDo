import { Component } from '@angular/core';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: string | null;
  todos: Todo[] = [];

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem === null) {
      this.todos = [];
    } else {
      try {
        this.todos = JSON.parse(this.localItem);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        this.todos = [];
      }
    }
  }

  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  addTodo(todo: Todo) {
    if (!this.todos.includes(todo)) {
      this.todos.push(todo);
      this.saveTodos();
    }
  }
  
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodos();
    }
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index].active = !this.todos[index].active;
      this.saveTodos();
      console.log(todo)
    }
  }
}