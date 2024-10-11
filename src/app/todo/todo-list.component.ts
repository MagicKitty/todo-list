import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoComponent } from './todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    RouterLink,
    TodoComponent
  ],
  template: `
    <app-todo></app-todo>
    <app-todo [name]="'soy sauce'" [rank]="5" />
    <app-todo #todoItem />
    <button (click)="click(todoItem)">click</button>
    <a routerLink="/home">go to home</a>
  `,
  styles: ``
})
export default class TodoListComponent {
  click(todoItem: TodoComponent) {
    console.log(todoItem);
  }
}
