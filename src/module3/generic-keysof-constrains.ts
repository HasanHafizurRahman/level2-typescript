type personType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address"; // manually defined
type newTypeKeyof = keyof personType; // using keyof
