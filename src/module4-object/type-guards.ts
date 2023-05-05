type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUser | AdminUser): string {
  if ("role" in user) {
    return `I am Admin and my role is ${user.role}`;
  } else {
    return `I am a normal user`;
  }
}

const normalUser1: NormalUser = { name: "Mr. X" };
const adminUser1: AdminUser = { name: "Mr. Y", role: "admin" };

// console.log(getUser(normalUser1));

// class constructor
class animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makesound() {
    console.log(`${this.species} is making sound`);
  }
}

class Dog extends animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makebark() {
    console.log("I am barking");
  }
}

class Cat extends animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMew() {
    console.log("I am mew mew");
  }
}

function getAnimal(obj: animal) {
  if (obj instanceof Dog) {
    obj.makebark();
  } else if (obj instanceof Cat) {
    obj.makeMew();
  } else {
    obj.makesound();
  }
}

const animal1 = new Dog("Shorail Kukur", "Dog");
const animal2 = new Cat("Persian Cat", "bilai");

getAnimal(animal2);
