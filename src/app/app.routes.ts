import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', loadComponent: () => import('./home/home.component') },
  { path: 'todo-list', loadComponent: () => import('./todo/todo-list.component') },
];
