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

const stud1 = new Student("Ismayil", "Ismayilov", 20, "dsf", ["asdasdasd"], 70);
const work1 = new Employee("emp", "loyee", 23, 3333, ["none"], Position.ceo);
console.log(stud1);
console.log(stud1.hasPassed());

let body = document.querySelector("body");
let selector = document.getElementById("selector") as HTMLSelectElement;
let additions = document.querySelector(".additions") as HTMLSelectElement;
console.log(selector.value);

selector.addEventListener("change", () => {
  if (selector.value == "student") {
    additions.innerHTML = `
<input type="text" name="" id="groupName" placeholder="groupName">
<input type="number" name="" id="GPA" placeholder="GPA">
<input type="text" name="" id="hobbies" placeholder="hobbies">
`;
  } else if (selector.value == "employee") {
    additions.innerHTML = `
    <input type="number" name="" id="salary" placeholder="salary">
    <input type="text" name="" id="skills" placeholder="skills">
    <input type="text" name="" id="position" placeholder="position">
    `;
  }
});

let nameInp = document.querySelector("#nameInp");
let surname = document.querySelector("#surname");
let age = document.querySelector("#age");
let groupName = document.querySelector("#groupName");
let GPA = document.querySelector("#GPA");
let hobbies = document.querySelector("#hobbies");
let salary = document.querySelector("#salary");
let skills = document.querySelector("#skills");
let position = document.querySelector("#position");

let addedName: string;
let addedSurname: string;
let addedAge: number;
let addedGroupName: string;
let addedGPA: number;
let addedHobbies: string;
let addedSalary: number;
let addedSkills: string;
let addedPosition: string;

nameInp?.addEventListener("change", () => {
  console.log((nameInp as HTMLInputElement)?.value);
  addedName = (nameInp as HTMLInputElement)?.value;
});
surname?.addEventListener("change", () => {
  console.log((surname as HTMLInputElement)?.value);
  addedSurname = (surname as HTMLInputElement)?.value;
});
age?.addEventListener("change", () => {
  console.log((age as HTMLInputElement)?.value);
  addedAge = (age as HTMLInputElement)?.value;
});
groupName?.addEventListener("change", () => {
  console.log((age as HTMLInputElement)?.value);
  addedGroupName = (groupName as HTMLInputElement)?.value;
});
GPA?.addEventListener("change", () => {
  console.log((age as HTMLInputElement)?.value);
  addedGPA = (GPA as HTMLInputElement)?.value;
});
hobbies?.addEventListener("change", () => {
  console.log((age as HTMLInputElement)?.value);
  addedHobbies = (hobbies as HTMLInputElement)?.value;
});
salary?.addEventListener("change", () => {
  console.log((age as HTMLInputElement)?.value);
  addedSalary = (salary as HTMLInputElement)?.value;
});
skills?.addEventListener("change", () => {
  console.log((age as HTMLInputElement)?.value);
  addedSkills = (nameInp as HTMLInputElement)?.value;
});

position?.addEventListener("change", () => {
  console.log((age as HTMLInputElement)?.value);
  addedPosition = (nameInp as HTMLInputElement)?.value;
});

let submit = document.querySelector(".submit")!;
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (selector.value == "student") {
    let student = new Student(
      addedName,
      addedSurname,
      addedAge,
      addedGroupName,
      addedHobbies,
      addedGPA
    );
    console.log(student);
    body?.innerHTML += `${addedName} ${addedSurname} ${addedAge} ${addedGroupName} ${addedHobbies} ${addedGPA}`;
  } else {
    let employee = new Employee(
      addedName,
      addedSurname,
      addedAge,
      addedSalary,
      addedSkills,
      addedPosition
    );
    console.log(employee);
    body?.innerHTML += `${addedName} ${addedSurname} ${addedAge} ${addedGroupName} ${addedHobbies} ${addedGPA}`;
  }
});
