import { Human } from "./human";

export interface IStudent<T> {
  groupName: string;
  hobbies: T;
  GPA: number;
  hasPassed(): boolean;
}

export class Student extends Human implements IStudent<string[]> {
  groupName: string;
  hobbies: string[];
  private _GPA: number;
  constructor(
    name: string,
    surname: string,
    age: number,
    groupName: string,
    hobbies: string[],
    GPA: number
  ) {
    super(name, surname, age);
    if (GPA >= 0 && GPA <= 100) {
      this._GPA = GPA;
    } else {
      this._GPA = 0;
    }
    this.groupName = groupName;
    this.hobbies = hobbies;
  }

  hasPassed(): boolean {
    if (this._GPA < 51) {
      return false;
    } else {
      return true;
    }
  }
}
