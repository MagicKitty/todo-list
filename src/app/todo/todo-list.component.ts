import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoggerDirective } from '../directives/logger.directive';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    RouterLink,
    LoggerDirective
  ],
  template: `
    <a routerLink="/home">go to home</a>
  `,
  styles: ``
})
export default class TodoListComponent {}
