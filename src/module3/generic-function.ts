// Arrow function

const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <T>(param: T): T[] => {
  return [param];
};

function createArray2<T>(params: T): T[] {
  // normal function
  return [params];
}

const result1 = createArray1<string>("ssskakasjj");

// [Chat GPT : 2] // find it md file
