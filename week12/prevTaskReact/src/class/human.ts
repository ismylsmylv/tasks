export interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo(): void;
}

export abstract class Human implements IHuman {
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
    return `${this._name} ${this._surname} is ${this.age}`;
  }

  constructor(name: string, surname: string, age: number) {
    this._name = name;
    this._surname = surname;
    this.age = age;
  }
}
