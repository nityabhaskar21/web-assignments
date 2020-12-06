import { Animal } from './Animal';

export class Dog implements Animal {
  makeNoise(): void {
    console.log('Dog barks');
  }
}
