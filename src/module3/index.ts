// type assertion

let emni: any;

emni = "Amar ja mon chay ami tai korbo";

// console.log((emni as string).length);  // to set a type for any method we should specify this by using as
// or,
console.log(<string>emni.length);

function kgToGram(params: string | number): string | number | undefined {
  if (typeof params === "string") {
    const value = parseFloat(params) * 1000;
    return `The value is ${value}`;
  }
  if (typeof params === "number") {
    const value = params * 1000;
    return value;
    // console.log(value);
  }
}

// const resultOfKg = kgToGram(30) as number; // by asertion we can specify the type which wasn't clear previously
// or,
const resultOfKg = <number>kgToGram(20);
console.log(resultOfKg);

// interface type vs interface

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
