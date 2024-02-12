import { Component, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'edit-form',
  standalone: true,
  templateUrl: './editform.component.html',
  styles: ['h1 { color: yellow }']
})

export class EditFormComponent {
  @Output() EditTodoEvent = new EventEmitter<string>;
  editTodo() {
    this.EditTodoEvent.emit(event.value)
  }
}