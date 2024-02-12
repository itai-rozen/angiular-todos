import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { TodoComponent } from './components/Todo/todo.component';
import { FormComponent } from './components/Form/form.component';
import { EditFormComponent } from './components/EditForm/editform.component';
import type { UpdateArgs } from './components/Todo/todo.component';

export interface Todo {
  title: string,
  id: number,
  isComplete: boolean,
  isEdit: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor,TodoComponent, FormComponent,EditFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todos: Todo[] = [
    {title: 'Todo 1', id: 1, isComplete: false, isEdit: false},
    {title: 'Todo 2', id: 2, isComplete: false, isEdit: false},
    {title: 'Todo 3', id: 3, isComplete: false, isEdit: false},
    {title: 'Todo 4', id: 4, isComplete: false, isEdit: false},
  ]

  deleteTodoEvent = (id: number|undefined) => {
    if (id)
      this.todos = this.todos.filter(todo => todo.id !== id);
  }
  createTodoEvent = (title: string) => {
    this.todos.push({id: this.todos.length+1, title, isComplete: false, isEdit: false})
  }
  updateTodoEvent = ({prop, id, content}: UpdateArgs) => {
    if (!id)
      return
    this.todos = this.todos.map((todo: any): Todo => {
       if (todo.id === id) {
        todo[prop] = content;
       } 
       return todo
    })
    console.log('todos: ', this.todos)
  }
}
