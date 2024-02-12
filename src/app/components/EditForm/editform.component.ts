import { Component, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Todo } from "../../app.component";
@Component({
  selector: 'edit-form',
  standalone: true,
  templateUrl: './editform.component.html',
  styles: ['h1 { color: yellow }']
})

export class EditFormComponent {
  @Output() UpdateEvent = new EventEmitter<Todo>()
  @Input() todo!: Todo
  updateTitle() {
    this.UpdateEvent.emit(this.todo)
  }
  changeTitle(value: string) {
    this.todo.title = value ;
    this.todo.isEdit = false;
    this.updateTitle()
  }
}