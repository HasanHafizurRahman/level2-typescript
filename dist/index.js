"use strict";
const course = "Mezba vai milestone";
console.log(course);
// function
function sum(num1, num2) {
    return num1 - num2;
}
console.log(sum(1, 2));
// make sqare of each value
const array = [2, 3, 4];
const result = array.map((sum) => sum * sum);
console.log(result);
const Person = {
    name: "Hasan Hafizur Rahman",
    salary: 25000,
    age: 24,
    addMoney(money) {
        return this.salary + money;
    },
};
console.log(Person.addMoney(29000));
const greetFriends = (frnd1, frnd2, frnd3) => console.log(`Hi ${frnd1}, ${frnd2}, ${frnd3}`);
greetFriends("Hasan", "Hafiz", "Rahman");
