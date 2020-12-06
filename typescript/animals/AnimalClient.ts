import { Animal } from './Animal';
import { Dog } from './Dog';
import { Lion } from './Lion';
import { Cat } from './Cat';
function display() {
  let animals: Animal[] = new Array(3);
  animals[0] = new Dog();
  animals[1] = new Cat();
  animals[2] = new Lion();
  animals.forEach(e => e.makeNoise());
}

display();
