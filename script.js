//complete this code
// class Animal {}

// class Dog extends Animal {}

// class Cat extends Animal {}

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;
class Animal {
  private _species: string;

  constructor(species: string) {
    this._species = species;
  }

  get species(): string {
    return this._species;
  }

  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species: string) {
    super(species);
  }

  purr(): void {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  bark(): void {
    console.log("woof");
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected Output: The Siamese makes a sound
myCat.purr(); // Expected Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected Output: The Golden Retriever makes a sound
myDog.bark(); // Expected Output: woof

