import { Animal } from './Animal';

export class Lion implements Animal {
  makeNoise(): void {
    console.log('Lion roars');
  }
}
