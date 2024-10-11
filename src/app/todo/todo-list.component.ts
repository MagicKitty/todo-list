import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <a routerLink="/home">go to home</a>
  `,
  styles: ``
})
export default class TodoListComponent {}
