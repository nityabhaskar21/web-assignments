import { Animal } from './Animal';

export class Cat implements Animal {
  makeNoise(): void {
    console.log('Cat mews');
  }
}
