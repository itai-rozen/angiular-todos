import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
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
  createTodo = (e : FormDataEvent) => {
    e.preventDefault();
    console.log('e: ', e)
  }
}
