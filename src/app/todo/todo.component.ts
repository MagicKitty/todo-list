import { Component, input } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  template: `
    todo component works!
    <br />
    <span>item {{ rankTest }}: {{ nameTest }}</span>
    <br />
    <span>item {{ item.rank }}: {{ item.name }}</span>
    <br />
    <span>item {{ item2?.rank }}: {{ item2?.name }}</span>
    <br />
    <span>item {{ rank() }}: {{ name() }}</span>
    <br />
    <button (click)="click($event)">click</button>
    <br />
    @if (rank() && name()) {
      <span>item {{ rank() }}: {{ name() }}</span>
    }
    <br />
    @for (element of elements; track $index) {
      {{ element }}
    }
    <br />
  `,
  styles: ``
})
export class TodoComponent {
  private readonly a = 'red'; // ERRORS in template if called as interpolation
  readonly rankTest = 1;
  readonly nameTest = 'pasta';
  readonly item = {
    name: 'tofu',
    rank: '2'
  };
  readonly item2: { name: string, rank: number } | null | undefined;

  name = input<string>();
  rank = input<number>();

  click(event: MouseEvent) {
    console.log(event);
  }

  elements = [5, 6, 7]
}
