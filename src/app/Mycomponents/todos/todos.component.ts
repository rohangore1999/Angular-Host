import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  localItem: string;

  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }

  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    // to get that particular index
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    // saving to our local machine
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  AddTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    // saving to our local machine
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    console.log(todo);
    // to get that particular index
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    // saving to our local machine
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
