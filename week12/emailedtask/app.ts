//1. Write a TypeScript program that declares a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age.
let name: string = "some name";
let age: number = 23;
console.log(name, age);

//2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.
let value: string = "value can be changed later";
var scope: string = "to use outside of block (for,if, while...)";
const change: string = "can not be changed later";

//3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.
let dataNum: number = 54;
let dataStr: string = "string value";
let dataBool: boolean = false;
let dataUnd: undefined;
// while (!dataBool) {
for (let i = 0; i < dataNum; i++) {
  console.log(i);
  if (i == dataNum) {
    dataBool = true;
  }
}
// }

//4. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.
let num1: number;
// num1 = "asdasdd"

//5. Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based on the assigned value.
let anything = 23;
console.log(anything--);

//6. Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion functions like parseInt()
type some = number | string;
let data: some;
data = "sdfsf";
let convertedData: string = data as string;
console.log(typeof convertedData);

//7. Write a TypeScript program that creates type aliases for complex data types such as objects or custom types. Use them to define variables and explain how they improve code readability.
type User = {
  userName: string;
  id: number;
};

let user1: User = {
  userName: "saddd",
  id: 342,
};
console.log(user1);

//8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.
let arr: string[];
arr = ["element1", "element2", "element3"];
arr.push("asd");
let dataArr: string = "zxcv";
let dataArr2: number = 23;
arr.push(dataArr);
// arr.push(dataArr2);
console.log(arr);

//9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.
enum Color {
  Red = "Red",
  Green = "Green",
  White = "White",
  Blue = "Blue",
}

let selectedColor: Color = Color.Red;
console.log(selectedColor);

//10. Write a TypeScript program that declares a variable 'isNull' and assigns it null. You should also declare a variable called 'isUndefined' and assign it an undefined value.
let isNull: null;
let isUndefined: undefined;
