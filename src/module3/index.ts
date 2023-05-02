let emni: any;

emni = "Amar ja mon chay ami tai korbo";

console.log((emni as string).length); // to set a type for any method we should specify this by using as

function kgToGram(params: string | number): string | number | undefined {
  if (typeof params === "string") {
    const value = parseFloat(params) * 1000;
    return value;
    console.log(`The value is ${value}`);
  }
  if (typeof params === "number") {
    const value = params * 1000;
    // return value;
    console.log(value);
  }
}

kgToGram(20);
