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
  getArea: Function;
}

function getArea(side: number): number {
  return side * side;
}

class Circle implements Shape {
  public constructor(public name: string) {}
  public radius?: number | undefined;
}

//copy
interface IAnimal {
  name: string;
  eat: () => void;
}

class Dog implements IAnimal {
  public constructor(public name: string) {}

  public eat() {
    console.log("The dog is eating.");
  }
}

const dog = new Dog("Fluffy");

// "The dog is eating."
dog.eat();
