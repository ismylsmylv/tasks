// creating class
class User {
  id: number;
  passWord: string;
  userName: string;
  constructor(id: number, userName: string, passWord: string) {
    (this.id = id), (this.userName = userName), (this.passWord = passWord);
  }
  getInfo(): void {
    console.log(this.id);
  }
}

const user1 = new User(23, "dasad", "eqeqwe");
console.log(user1);

class Admin extends User {
  adminPass: string;
  constructor(
    id: number,
    userName: string,
    adminPass: string,
    passWord: string
  ) {
    super(id, userName, passWord);
    this.adminPass = adminPass;
  }
}

const admin1 = new Admin(12, "121212112", "dsadasdads", "Dasasdad");
console.log(admin1);
admin1.getInfo();
user1.getInfo();

//access modifiers
class Counter {
  readonly count: number;
  constructor(count: number) {
    this.count = count;
  }
  getCount(): void {
    console.log(this.count);
  }
}

const count1 = new Counter(2);
// count1.count = 3;
console.log(count1);

class Multiplier {
  private _count: number;

  constructor(count: number) {
    this._count = count;
  }

  public get count() {
    return this._count;
  }

  public set countSet(finCount: number) {
    this._count = finCount;
  }

  getCount(): void {
    console.log(this.count);
  }
}

const multi1 = new Multiplier(23);
multi1.getCount();

class Increaser {
  static classCount: number = 0;
  first: string;
  last: number;
  constructor(first: string, last: number) {
    this.first = first;
    this.last = last;
    Increaser.classCount++;
  }
}

console.log(Increaser.classCount);
const data1 = new Increaser("dassad", 23);
console.log(Increaser.classCount);
const data2 = new Increaser("dassaddaadas", 3);
console.log(Increaser.classCount);
const data3 = new Increaser("asdkal;kds", 54);
console.log(Increaser.classCount);
