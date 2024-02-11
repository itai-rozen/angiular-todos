import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
  selector: 'todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  
})

export class TodoComponent {
  @Input() singleTodo! : {title?: string, id?: number, isComplete?: boolean};   
  @Output() deleteTodoEvent = new EventEmitter<number|undefined>()
  deleteTodo(id: number|undefined) {
    if (id)
      this.deleteTodoEvent.emit(id);
  }
}