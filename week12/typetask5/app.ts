// 1) Tuple tipinə aid bir nümunə yazın 2
let tupleArr: [string, number];
tupleArr = ["asfdf", 234];
// 2) Enum tipinə aid bir nümunə yazın 2
enum Position {
  ceo = "ceo",
  it = "it",
  h1 = "h1",
}

// 3) Union type ilə bağlı bir nümunə yazın 2
let data: string | number;

// 4) Type Aliases ilə bağlı bir nümunə yazın 2
// as

// 5) Parametr tipləri qeyd olunan optional parametrli void function nümunəsi yazın 5
function getDatas(datas: string[], id?: number): void {
  console.log(datas);
}

// 6) Parametr tipləri qeyd olunan default parametrli geriyə boolean dəyər qaytaran function nümunəsi yazın 5
function getUsers(datas: string[], id: number = 1): boolean {
  return true;
}
// 7) ad , soyadı olan tələbə class-ı yaradın 5
// 8) private keyi olsun və set get methodlarını yazın 10
// 9) protected, static, readonly, keyləri olsun və müraciət edilsin 10
class Telebe {
  ad: string;
  soyad: string;
  private _key: number;
  protected username: string;
  readonly history: string[];
  constructor(
    ad: string,
    soyad: string,
    key: number,
    username: string,
    history: string[]
  ) {
    this.ad = ad;
    this.soyad = soyad;
    this.username = username;
    this._key = key;
    this.history = history;
  }
  get Key() {
    return this._key;
  }
  set Key(key) {
    key = this._key;
  }
  static Order = 0;
}

let telebe1 = new Telebe("john", "doe", 23, "userrr", ["none"]);
console.log(telebe1);
console.log(telebe1.history);

// 10) abstract klass nümunəsi yazın 10
abstract class absClass {
  data: number[];
  constructor(data: number[]) {
    this.data = data;
  }
}

class User extends absClass {
  pass: string;
  constructor(data: number[], pass: string) {
    super(data);
    this.pass = pass;
  }
}

// 11)OOP 4 prinsipini hansılardır 10
//encapsulation
//inheritance

// 12) interface extends class nümunə göstərin 10
interface userSet {
  userName: string;
  password: string;
}
interface adminSet {
  admin: string;
  adminPass: string;
}

interface userSet extends Telebe {}
// 13) interface implements interface nümunə göstərin 10
interface adminSet extends userSet {}

// 14) İntersection types nümunəsi göstərin 10
type intersectioned = userSet & adminSet;

// 15) Generic function nümunəsi göstərin 10
function generic<T>(data: T) {
  console.log(data);
}
