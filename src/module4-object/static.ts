class counter {
  counter: number;
  constructor(counter: number) {
    this.counter = counter;
  }

  increment(): number {
    return (this.counter += 1);
  }
  decrement(): number {
    return (this.counter -= 1);
  }
}

const counter1 = new counter(32);
// console.log(counter1.increment());

// using static in class
class Counter {
  static count: number = 0;
  static Increment(): number {
    return (Counter.count += 1);
  }
  static Decrement(): number {
    return (Counter.count -= 1);
  }
}

// const Count1 = new Counter();
// const Count2 = new Counter();
// const Count3 = new Counter();
console.log(Counter.Increment());
console.log(Counter.Increment());
console.log(Counter.Increment());
