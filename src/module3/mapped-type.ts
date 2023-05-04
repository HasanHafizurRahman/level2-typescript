type areaNumber = {
  height: number;
  width: number;
};

type B = areaNumber["height"]; // look up types
type C = keyof areaNumber; // 'width' | 'height'

type volume = {
  height: number;
  width: number;
  name: string;
};

// type area = {
//   [key in keyof volume]: volume[key];
// };

// generic way
type area<T> = {
  readonly [K in keyof T]: T[K]; //readonly make it just readonly
};
