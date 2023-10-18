class Animal {
    #age
    constructor(name, age) {
        this.name = name
        this.#age = age
    }
    speak() {
        console.log(`${this.name} makes noise`);
    }
}
//cat and dog classes both inherit from animal
class Cat extends Animal {
    speak() {
        super.speak()
        console.log(`${this.name} meows`);
    }
}

class Dog extends Animal {
    owner;
    constructor(name, age, owner) {
        super(name, age);
        this.owner = owner
    }
    speak() {
        console.log(`${this.name} makes noise`);
    }
}

class Lion extends Animal {
    speak() {
        super.speak()
        console.log(`${this.name} meows`);
    }
}

let tom = new Cat("tommy", 8)
let jake = new Dog("tommy", 8, "jade")
let kale = new Lion("kale", 18)

console.log(tom);
console.log(jake);
console.log(kale);
jake.speak()
kale.speak()