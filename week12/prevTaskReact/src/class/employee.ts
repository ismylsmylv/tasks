import { Human } from "./human";
export enum Position {
  worker = "worker",
  ceo = "ceo",
  hr = "hr",
  it = "it",
}
export interface IEmployee<T> {
  salary: number;
  skills: T;
  position: Position;
}

export class Employee extends Human implements IEmployee<string[]> {
  salary: number;
  skills: string[]; //generic
  position: Position;
  constructor(
    name: string,
    surname: string,
    age: number,
    salary: number,
    skills: string[],
    position: Position
  ) {
    super(name, surname, age);
    this.position = position;
    this.salary = salary;
    this.skills = skills;
  }
}
