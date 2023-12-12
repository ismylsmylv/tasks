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

enum ShapeKind {
  Circle,
  Square,
}

interface Shape {
  kind: ShapeKind;
  radius?: number;
  sideLength?: number;
  getArea: (param: number) => number;
}

function getArea(side: number): number {
  return side * side;
}

class Circle implements Shape {
  public kind: ShapeKind = ShapeKind.Circle;
  public radius?: number | undefined;
  public constructor(radius?: number) {
    this.radius = radius;
  }
  public getArea(param: number): number {
    if (this.radius != undefined) {
      return Math.PI * this.radius * this.radius;
    }
  }
}

class Square implements Shape {
  public kind: ShapeKind = ShapeKind.Circle;
  public sideLength?: number | undefined;
  public constructor(sideLength?: number) {
    this.sideLength = sideLength;
  }
  public getArea(param: number): number {
    if (this.sideLength != undefined) {
      return this.sideLength * this.sideLength;
    }
  }
}

const circle = new Circle(5);
console.log(circle.getArea(0));

const square = new Square(10);
console.log(square.getArea(0));
