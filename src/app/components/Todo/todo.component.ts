import { Component, Input, Output, EventEmitter } from "@angular/core";
import { EditFormComponent } from "../EditForm/editform.component";
import type { Todo } from "../../app.component";
export type UpdateArgs = {
  prop : keyof Todo,
  id: number,
  content: string|boolean
}
@Component({
  selector: 'todo',
  standalone: true,
  imports: [EditFormComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  
})

export class TodoComponent {
  
  @Input() singleTodo! : Todo;   
  @Output() deleteTodoEvent = new EventEmitter<number|undefined>()
  @Output() updateTodoEvent = new EventEmitter<UpdateArgs>()
  deleteTodo(id: number|undefined) {
    if (id)
      this.deleteTodoEvent.emit(id);
  }
  updateTodo(prop: keyof Todo, id: number|undefined, content: boolean|string) {
    if (id)
      this.updateTodoEvent.emit({prop, id, content});
  }
}
