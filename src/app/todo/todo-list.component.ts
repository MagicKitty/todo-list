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
    <div class="loggable" logText>Hello</div>
    <div class="loggable" logText notLoggable="true">Hello</div>
  `,
  styles: ``
})
export default class TodoListComponent {}
