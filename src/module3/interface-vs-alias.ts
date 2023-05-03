// interface type vs type alias

type User = {
  // type alias required "=" sign & we mostly use it for premitive data type
  name: string;
  age: number;
};

interface Iuser {
  // type interface required "interface" keyword & it doesn't require any "="
  name: string;
  age: number;
}

const userWithTypeAlias: User = {
  name: "Type alias",
  age: 30,
};

// const userWithInterface: Iuser = {
//   name: "Interface",
//   age: 30,
// };

interface IExtendedUser extends Iuser {
  role: string;
}

const customer: IExtendedUser = {
  name: "jinn",
  age: 3000,
  role: "ibadah",
};

type numberTypeAlias = (num1: number, num2: number) => number;

const addNumber: numberTypeAlias = (num1, num2) => num1 + num2; //type alias
// or

interface IAddnumber {
  (num1: number, num2: number): number;
}
const addNumber1: IAddnumber = (num1, num2) => num1 + num2; //type interface

// for array

type rollnumberType = number[];
const rollnumbers: rollnumberType = [1, 2, 3, 3, 5]; // type alias

// or
interface Irollnumber {
  [index: number]: number;
}
const rollnumbers1: Irollnumber = [1, 2, 3, 3, 5]; // type interface

// const roll : number[] = [1,2,3,4,5]  // OR,
const roll: Array<number> = [1, 2, 3, 3, 5];

// array of object
const numberNameAndRoll: Array<{ name: string; roll: number }> = [
  {
    name: "jinn",
    roll: 1,
  },
  {
    name: "ferot",
    roll: 2,
  },
];
