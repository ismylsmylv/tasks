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
    function Circle(radius) {
        this.kind = ShapeKind.Circle;
        this.radius = radius;
    }
    Circle.prototype.getArea = function (param) {
        if (this.radius != undefined) {
            return Math.PI * this.radius * this.radius;
        }
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square(sideLength) {
        this.kind = ShapeKind.Circle;
        this.sideLength = sideLength;
    }
    Square.prototype.getArea = function (param) {
        if (this.sideLength != undefined) {
            return this.sideLength * this.sideLength;
        }
    };
    return Square;
}());
var circle = new Circle(5);
console.log(circle.getArea(0));
var square = new Square(10);
console.log(square.getArea(0));
