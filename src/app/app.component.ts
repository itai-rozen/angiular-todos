import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { TodoComponent } from './components/Todo/todo.component';
import { FormComponent } from './components/Form/form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor,TodoComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todos = [
    {title: 'Todo 1', id: 1, isComplete: false},
    {title: 'Todo 2', id: 2, isComplete: false},
    {title: 'Todo 3', id: 3, isComplete: false},
    {title: 'Todo 4', id: 4, isComplete: false},
  ]

  deleteTodoEvent(id: number|undefined) {
    if (id)
      this.todos = this.todos.filter(todo => todo.id !== id);
  }
  createTodoEvent(title: string) {
    this.todos.push({id: this.todos.length+1, title, isComplete: false})
  }
}
