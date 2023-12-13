enum livePlace {
  river = "river",
  ocean = "ocean",
  sea = "sea",
}

interface IAnimal {
  name: string;
  age: number;
  getInfo(): void;
}

interface IBird {
  fly(): boolean;
  wingColor: string;
}
type killType = string | string[];
interface IKill<T extends killType> {
  kill: T;
}
//<U extends livePlace>
interface IFish extends IKill<string> {
  swim(): void;
  //   livePlace: U;
}

abstract class Animal implements IAnimal {
  readonly name: string;
  readonly age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getInfo(): void {
    console.log(this.name, this.age);
  }
}

class Bird extends Animal implements IBird {
  wingColor: string;
  constructor(name: string, age: number, wingColor: string) {
    super(name, age);
    this.wingColor = wingColor;
  }
  fly(): boolean {
    return true;
  }
}

class Fish extends Animal implements IFish {
  kill: string;
  swim(): void {
    console.log(`${this.name} is swimming`);
  }
  constructor(name: string, age: number, kill: string) {
    super(name, age);
    this.kill = kill;
  }
  fly(): boolean {
    return true;
  }
}

const bird1 = new Bird("flamingo", 12, "pink");
const fish1 = new Fish("salmon", 23, "adad");
console.log(fish1.kill);
console.log(bird1);
bird1.getInfo();
fish1.swim();
