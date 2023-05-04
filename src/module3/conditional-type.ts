type a1 = string;
type a2 = a1 extends string ? string : null;

// nested type
type realman = {
  wife1: string;
  wife2: string;
};

type checkPower<T> = T extends { wife1: string } ? true : false;

type checkWife = checkPower<realman>;

// using key of
type realman2 = {
  wife1: string;
  wife2: string;
};

type A = keyof realman2;

type checkPower2<T, K> = K extends A ? true : false;

type checkWife2 = checkPower2<realman2, "wife1">;

// removing a property
type wife = "sabila" | "nabila" | "kabila";

type talaqWife<T> = T extends "kabila" ? never : T;

type existingWife = talaqWife<wife>; // type existingWife = "sabila" | "nabila"

// to make it dynamic

type wifeNames = "sadia" | "nadia" | "kadia";

type ignoreWife<T, K> = T extends K ? never : T;

type priorityWife = ignoreWife<wifeNames, "kadia">; // type priorityWife = "sadia" | "nadia"
