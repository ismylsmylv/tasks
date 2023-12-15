//1. Write a TypeScript program that declares a variable `name` and assigns it a string value. Also declare a variable `age` and assign it a number value. Finally print the values of name and age.
var name = "some name";
var age = 23;
console.log(name, age);
//2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.
var value = "value can be changed later";
var scope = "to use outside of block (for,if, while...)";
var change = "can not be changed later";
//3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.
var dataNum = 54;
var dataStr = "string value";
var dataBool = false;
var dataUnd;
// while (!dataBool) {
for (var i = 0; i < dataNum; i++) {
    console.log(i);
    if (i == dataNum) {
        dataBool = true;
    }
}
// }
//4. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.
var num1;
// num1 = "asdasdd"
//5. Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based on the assigned value.
var anything = 23;
console.log(anything--);
var data;
data = "sdfsf";
var convertedData = data;
console.log(typeof convertedData);
var user1 = {
    userName: "saddd",
    id: 342,
};
console.log(user1);
//8. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements, removing elements, and iterating through the array.
var arr;
arr = ["element1", "element2", "element3"];
arr.push("asd");
var dataArr = "zxcv";
var dataArr2 = 23;
arr.push(dataArr);
// arr.push(dataArr2);
console.log(arr);
//9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["White"] = "White";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var selectedColor = Color.Red;
console.log(selectedColor);
//10. Write a TypeScript program that declares a variable 'isNull' and assigns it null. You should also declare a variable called 'isUndefined' and assign it an undefined value.
var isNull;
var isUndefined;
