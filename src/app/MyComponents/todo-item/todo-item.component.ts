import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() checkboxClicked = new EventEmitter();
  Checkbox: any;

ngOnInit(): void {}
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("onClick Has Been Trigerred");
}
onCheckboxClick(todo: any) {
    this.checkboxClicked.emit(todo); // Emit the event

}

} 


