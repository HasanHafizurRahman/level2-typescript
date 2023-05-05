class BankAccount {
  id: number;
  name: string;
  private balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  getBalace() {
    console.log(`My current balance: ${this.balance}`);
  }
  addDeposite(amount: number) {
    this.balance += amount;
  }
  donation(amount: number) {
    this.balance -= amount;
  }
}

const myAccount = new BankAccount(1, "Hasan Hafizur Rahman", 453999);
myAccount.addDeposite(12000);
myAccount.donation(8000);
console.log(myAccount);
