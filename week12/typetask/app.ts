console.log("Hello World");
console.log("Goodbye World");

let num1: number = 23;
console.log(num1);

let word: string = "asdfgh";
console.log(word);

let bool: boolean = true;
console.log(bool);

let obj: {
  name: string;
  id: number;
};
obj = {
  name: "adadasd",
  id: 23,
};
console.log("obj:", obj);

let arr: string[];
arr = ["asdf", "ghjk", "zczx"];
console.log(arr);

let arr2: boolean[];
arr2 = [true, false];

// let tupleArr: [];
// tupleArr = [2323, "sdfsffd"];
// console.log(tupleArr);

function adder(a: number, b: number) {
  return a + b;
}
console.log(adder(23, 1));

function divider(a, s): void {}

let unionArr: string | boolean;
unionArr = "asd";
console.log(unionArr);
