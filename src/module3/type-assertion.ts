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
