import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoggingService } from './logging.service';

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
export default class TodoListComponent {
  loggingService = inject(LoggingService);

  constructor() {
    this.loggingService.log('hi');
  }
}
