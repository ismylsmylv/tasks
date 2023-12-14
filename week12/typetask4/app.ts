interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo(): void;
}

abstract class Human implements IHuman {
  private _name: string;
  private _surname: string;
  age: number;
  public get getName(): void {
    return console.log(this._name);
  }
  public get getSurname(): void {
    return console.log(this._surname);
  }
  public get getFullName(): void {
    return console.log(`${this._name} ${this._surname}`);
  }

  getInfo() {
    console.log(`${this._name} ${this._surname} is ${this.age} old`);
  }

  constructor(name: string, surname: string, age: number) {
    this._name = name;
    this._surname = surname;
    this.age = age;
  }
}

enum Position {
  worker = "worker",
  ceo = "ceo",
  hr = "hr",
  it = "it",
}
interface IEmployee<T> {
  salary: number;
  skills: T;
  position: Position;
}

class Employee extends Human implements IEmployee<string[]> {
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

interface IStudent<T> {
  groupName: string;
  hobbies: T;
  GPA: number;
  hasPassed(): boolean;
}

class Student extends Human implements IStudent<string[]> {
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
    this._GPA = GPA;
    this.groupName = groupName;
    this.hobbies = hobbies;
  }

  public get checkGPA() {
    return this._GPA;
  }

  public set checkGPA(checkedGPA: number) {
    if (checkedGPA > 0 && checkedGPA < 100) {
      this._GPA = checkedGPA;
      console.log(checkedGPA);
    } else {
      // console.log("checkedGPAaaa");

      // throw new Error("GPA should be in range of (1, 100)");
      this._GPA = 0;
    }
  }
  hasPassed(): boolean {
    if (this._GPA < 51) {
      return false;
    } else {
      return true;
    }
  }
}

const stud1 = new Student("aaaaa", "AAaaa", 23, "dsf", ["asdasdasd"], 2115);
const work1 = new Employee("emp", "loyee", 23, 3333, ["none"], Position.ceo);
console.log(stud1);
console.log(stud1.hasPassed());
