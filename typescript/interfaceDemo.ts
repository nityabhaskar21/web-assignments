interface Flyable {
  fly(): void;
}

class Flight implements Flyable {
  fly(): void {
    console.log('flight fly');
  }
}

function flyableClient() {
  let obj = new Flight();
  obj.fly();
}

flyableClient();
