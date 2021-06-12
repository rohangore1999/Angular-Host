import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // accepting as a (Input) from .html [todo]="todo" [i]="i"
  @Input() todo: Todo;
  @Input() i: number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onclick(todo: Todo){
    // it will emit/send the one which button has clicked
    this.todoDelete.emit(todo);
    console.log("deleted")
  }

  onChechboxClick(todo: Todo){
    // it will emit/send the one which checked  has clicked
    this.todoCheckbox.emit(todo);
  }
}
