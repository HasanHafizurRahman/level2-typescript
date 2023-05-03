// generic type
type single<x> = x;
const boos: single<string> = "Hasan Hafizur Rahman";

// generic tuple

type GenericType<X, Y> = [X, Y];
const relation: GenericType<string, string> = ["Hasan", "Hafizur"];

const tupleObject: GenericType<{ name: string; age: number }, string> = [
  { name: "Hasan", age: 12 },
  "Shanto",
];

interface Icourse<T> {
  name: string;
  intructor: T;
}

const webDev: Icourse<string> = {
  name: "Complete Web Development",
  intructor: "Mezba abadin",
};

const webDev2: Icourse<string[]> = {
  name: "Next Level Web Development",
  intructor: ["Mezba", "Mir", "Fahim"],
};
