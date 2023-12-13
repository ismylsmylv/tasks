function func(a: number, b?: string) {
  if (typeof b != "undefined") {
    return b;
  } else {
    return a;
  }
}
console.log(func(2, "asda"));

function func2(a: string, c: number, b?: string) {
  if (typeof a != "undefined") {
    return a;
  } else if (typeof b != "undefined") {
    return b;
  } else {
    return c;
  }
}

function def(initial1: number, initial2 = 100): number {
  return initial1 * initial2;
}

console.log(def(230, 12));

function bothDef(num1: number = 213, num2: number = 1234): number {
  return (num1 * 2) / num2;
}

console.log(bothDef());

function opt(num1?: number, num2: number = 1234): number {
  return (num1 * 2) / num2;
}

console.log(opt(3));

function restFunc(...numbers: number[]): number {
  let sum = 0;
  numbers.forEach((elem) => {
    sum = sum + elem;
  });
  return sum;
}

console.log(restFunc());

function adder(a: number | string, b: number | string): number | string {
  if (typeof a == "string" && typeof b == "string") {
    return a + b;
  }
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  }
}

console.log(adder("ewsew", "asdsad"));

function adder(a: number, b: number): number;
function adder(a: string, b: string): string;
function adder(a: any, b: any): any {
  return a + b;
}

console.log(adder(2131, 1212));
