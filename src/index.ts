const course: string = "Mezba vai milestone";
console.log(course);

// function
function sum(num1: number, num2: number) {
  return num1 - num2;
}
console.log(sum(1, 2));

// make sqare of each value
const array = [2, 3, 4];

const result = array.map((sum: number) => sum * sum);
console.log(result);

const Person: {
  name: string;
  salary: number;
  age: number;
  addMoney(money: number): number;
} = {
  name: "Hasan Hafizur Rahman",
  salary: 25000,
  age: 24,
  addMoney(money: number) {
    return this.salary + money;
  },
};
console.log(Person.addMoney(29000));

const greetFriends = (frnd1: string, frnd2: string, frnd3: string): void =>
  console.log(`Hi ${frnd1}, ${frnd2}, ${frnd3}`);
greetFriends("Hasan", "Hafiz", "Rahman");
