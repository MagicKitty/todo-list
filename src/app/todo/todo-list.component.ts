import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoggerDirective } from '../directives/logger.directive';
import { FromNowPipe } from '../pipes/from-now.pipe';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    RouterLink,
    LoggerDirective,
    FromNowPipe
  ],
  template: `
    <a routerLink="/home">go to home</a>
    {{ date | fromNow }}
  `,
  styles: ``
})
export default class TodoListComponent {
  date = '2025-02-11T11:30:30';
}
