import { Component, Output, EventEmitter, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule, FormGroup } from "@angular/forms";
import { Todo } from "../../app.component";
@Component({
  selector: 'edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editform.component.html',
  styles: ['h1 { color: yellow }']
})

export class EditFormComponent {
  editFormGroup = new FormGroup({
    editFormTitle : new FormControl('')
  })
  @Output() UpdateEvent = new EventEmitter<Todo>();
  @Input() todo!: Todo;
  updateTitle = () => this.UpdateEvent.emit(this.todo);

  changeTitle = () => {
    this.todo.title = this.editFormGroup.value.editFormTitle as string;
    this.todo.isEdit = false;
    this.updateTitle()
  }
}