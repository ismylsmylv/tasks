// class Animal {
//     #age
//     constructor(name, age) {
//         this.name = name
//         this.#age = age
//     }
//     speak() {
//         console.log(`${this.name} makes noise`);
//     }
// }
// //cat and dog classes both inherit from animal
// class Cat extends Animal {
//     speak() {
//         super.speak()
//         console.log(`${this.name} meows`);
//     }
// }

// class Dog extends Animal {
//     owner;
//     constructor(name, age, owner) {
//         super(name, age);
//         this.owner = owner
//     }
//     speak() {
//         console.log(`${this.name} makes noise`);
//     }
// }

// class Lion extends Animal {
//     speak() {
//         super.speak()
//         console.log(`${this.name} meows`);
//     }
// }

// let tom = new Cat("tommy", 8)
// let jake = new Dog("tommy", 8, "jade")
// let kale = new Lion("kale", 18)

// console.log(tom);
// console.log(jake);
// console.log(kale);
// jake.speak()
// kale.speak()


//human class 
class Human {
    #birthyear;
    constructor(name, surname, birthyear, birthplace) {
        this.name = name,
            this.surname = surname,
            this.#birthyear = birthyear,
            this.birthplace = birthplace
    }
    getFullName() {
        return this.name + " " + this.surname
    }
    date = new Date
    currentYear = this.date.getFullYear()
    getAge() {
        return this.currentYear - this.#birthyear
    }
    get age() {
        return this.currentYear - this.#birthyear
    }
    get fullName() {
        return this.name + " " + this.surname
    }
    // static compareAge() {
    //     if (Human > Human) {
    //         return Human
    //     }
    //     else {
    //         return Human
    //     }
    // }
}
let jake = new Human("jake", "doe", 1999, "london")
let elen = new Human("elen", "relle", 1987, "nyc")

class User extends Human {
    constructor(name, surname, birthyear, birthplace, username, email, password) {
        super(name, surname, birthyear, birthplace)
        this.username = username
        this.email = email
        this.password = password

    }
    isLogged = false
    login(username, password) {
        username = prompt("enter username")
        password = prompt("enter password")
        if (username == this.username && password == this.password) {
            alert(`Welcome back ${this.getFullName()}`)
            this.isLogged = true
        }
        else {
            alert("username or password incorrect")
        }
    }
    logout() {
        if (this.isLogged) {
            alert("logget out success")
            this.isLogged = false
        }
        else {
            alert("you haven't logged in")
        }
    }
}

let jake2 = new User("jake2", "doe2", 1909, "london", "jake2", "jake2@gmail.com", 123)
console.log(jake);
console.log(jake2);
//jake2.login()
//jake2.logout()

