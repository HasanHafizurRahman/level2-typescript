// parameter property

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  public makesound() {
    console.log(`My pet ${this.species} named ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("neri kutta", "dog", "gheu gheuw");
dog.makesound(); //My pet dog named neri kutta says gheu gheuw
