// type person = object;
// // date tipi birthdate
// // type Name = string;
// // type Surname = string;
// // type Age = number;
// // type BirthDate = Date;
// // type Id = number;
// type Person<g> = {
//   name: string;
//   surname: string;
//   age: number;
//   id: number;
//   birthDate: Date;
//   hobbies:g[]
// };
// const d: Date = new Date();
// console.log(d);
// function createPerson<g>(
//   name: string,
//   surname: string,
//   age: number,
//   id: number,
//   birthDate: Date,
//     hobbies: <g>[]
// ): Person<g> {
//   const obj: Person<g> = {
//     name,
//     surname,
//     age,
//     id,
//     birthDate,
//     hobbies:[]
//   };
//   return obj;
// }
// console.log(createPerson("tom", "jones", 23, 3,[21 ,2122], new Date("12 12 12")));
// // , ["asd", "fgh", "hjk"]
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
function getArea(side) {
    return side * side;
}
var Circle = /** @class */ (function () {
    function Circle(name) {
        this.name = name;
    }
    return Circle;
}());
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log("The dog is eating.");
    };
    return Dog;
}());
var dog = new Dog("Fluffy");
// "The dog is eating."
dog.eat();
