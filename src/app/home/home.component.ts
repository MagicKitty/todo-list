import { Component } from '@angular/core';

type FIRSTNAME = 'nico' | 'karim';
type LASTNAME = 'blin' | 'ezzahiri';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export default class HomeComponent {
  constructor() {
    // ---------------------
    let a = {
      firstname: 'nico',
      lastname: 'blin'
    }

    if (a.firstname === 'nico') {
      console.log(a);
      console.table(a);
    }
    // ---------------------
    const b: { firstname: FIRSTNAME, lastname: LASTNAME }[] = [
      { firstname: 'nico', lastname: 'blin' },
      { firstname: 'karim', lastname: 'ezzahiri' },
    ]

    if (!!b.length) {
      console.log(b);
      console.table(b);
    }
    // ---------------------
    console.log(this.createPony());
    this.createFunction().run();
    // ---------------------
    const youtube = { you: 'you', tube: 'tube' };
    const { you, tube } = youtube;
    console.log(you, tube);
    const { you: what, tube: tf } = youtube;
    console.log(what, tf);
    // ---------------------
    const timeouts = [1000,2000,3000];
    const [shortTimeout, mediumTimeout] = timeouts;
    console.log(shortTimeout, mediumTimeout);
    // ---------------------
    this.getPonies(0, 5)
    // ---------------------
    this.addPonies1('a','b','c');
    this.addPonies2([4, 8, 15, 16, 23, 42]);
    this.addPonies3({ a: 'a', b: 'b', c: 'c' });
    // ---------------------
    console.log(Pony.speed());
    const pony = new Pony();
    pony.color = 'blue';
    console.log(pony.color);
    // ---------------------
    const name = 'nico';
    console.log('hello' + ' ' + name + '!');
    console.log(`hello ${name}!`);
    console.log`hello ${name}! is ${name} your real name?`;

    const [person1, person2] = ['nico', 'karim'];
    const uppercaseNames = (strings: readonly string[], ...values: readonly string[]) => {
      // `strings` is an array with the static parts ['Hello ', '! Where is ', '?']
      // `values` is an array with the evaluated expressions ['Cedric', 'Agnes']
      const names = values.map(name => name.toUpperCase());
      // `names` now has ['CEDRIC', 'AGNES']
      // let's merge the `strings` and `names` arrays
      return strings.map((string, i) => `${string}${names[i] ? names[i] : ''}`).join('');
    };
    const result = uppercaseNames`Hello ${person1}! Where is ${person2}?`;
    console.log(result);
  }

  private createPony() {
    const color = 'rainbow';
    const name = 'fluffy';
    return { color, name };
  }

  private createFunction() {
    return {
      run: () => {
        console.log('run');
      }
    }
  }

  private getPonies(size: number, page: number, other = 5, otherOther?: boolean) {
    // falsy values: undefined, 0, false, "", NaN...
    size = size || 10;
    page = page || 1;
    console.log(size, page, other);
  }

  private addPonies1(...ponies: string[]) {
    console.log(ponies);
  }

  private addPonies2(ponies: number[]) {
    console.log(...ponies);
    console.log(Math.min(...ponies));
  }

  private addPonies3(ponies: { a: string, b: string, c: string }) {
    // console.log(...ponies); -> ERROR no iterators
    const { a, ...rest } = ponies;
    console.log(a);
    console.log(rest);
  }
}

class Pony {
  private _color = 'red';

  static speed() {
    return 10;
  }

  get color() {
    return this._color;
  }

  set color(color: string) {
    this._color = color;
  }
}
