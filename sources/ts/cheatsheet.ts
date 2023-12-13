//setup
// on first time - npm install -g typescript
// check version - tsc --v
// modules when required - npm install -g ts-node
// creating js file - npx tsc app.ts
// create & execute (live) - npx tsc app.ts -w
// prevent red underlines - npx tsc --init

//types
let name: string = "John";
let age: number = 25;
let active: boolean = true;

// *array*
let names: string[] = ["John", "Jane", "Peter", "David", "Mary"];

// *object*
let person: {
  name: string;
  age: number;
};

person = {
  name: "John",
  age: 25,
};

// *tuple*
let skill: [string, number];
skill = ["Programming", 5];
// or
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

// *enum*
enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

// *void*
// The void type denotes the absence of having any type at all. It is a little like the opposite of the any type.

//*never*
// The never type is a type that contains no values. Because of this, you cannot assign any value to a variable with a never type.

// *union*
let result: number | string;
result = 10; // OK
result = "Hi"; // also OK
result = false; // a boolean value, not OK

// *aliases*
// Type aliases allow you to create a new name for an existing type.
type chars = string;
let messsage: chars; // same as string type

// *string literal*
// The string literal types allow you to define a type that accepts only one specified string literal.
let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
mouseEvent = "mouseover"; // compiler error

//functions
// *function type that accepts two numbers and returns a number*
function add(a: number, b: number): number {
  return a + b;
}

let sum = add(10, 20);

// *optional parameters*
// optional parameters must appear after the required parameters in the parameter list
function multiply(a: number, b: number, c?: number): number {
  if (typeof c !== "undefined") {
    return a * b * c;
  }
  return a * b;
}

// *default parameters*
function applyDiscount(price: number, discount = 0.05) {
  return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95

//* rest parameter allows a function to accept zero or more arguments of the specified type*
function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

//* function overloadings allow you to establish the relationship between the parameter types and result types of a function*
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;

  if (typeof a === "string" && typeof b === "string") return a + b;
}
// or
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
