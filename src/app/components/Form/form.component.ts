import { Component, EventEmitter, Output } from "@angular/core";

@Component ({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true,
})

export class FormComponent {
  @Output() CreateTodoEvent = new EventEmitter<string>;
  createTodo(title: string) {
    this.CreateTodoEvent.emit(title)
  }
}