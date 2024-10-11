import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    home component works!
    <a routerLink="/todo-list">go to todo list</a>
  `,
  styles: ``
})
export default class HomeComponent {}
