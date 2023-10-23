// 1. Write a JavaScript program to display the current day and time in the following format.
// let date = new Date
// console.log(`Current date is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// let a = 5
// let b = 6
// let c = 7
// let area = (a + b + c) / 2
// console.log(area);

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction.This is done by periodically removing one letter from the string end and attaching it to the front.
// let str = "w3resource"
// let revStr = []
// for (let i = 0; i <= str.length; i++) {
//     revStr.push(str.charAt(str.length - i))
// }
// str = revStr.join('')
// console.log(str);

//is leap year
// let year = Number(prompt("enter year:"))
// if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
//     alert(`${year} is leap`)
// }
// else {
//     alert(`${year} is not leap`)
// }



////////////////////GPT-made Classes////////////////////
// 1 Write a JavaScript program to create a class called "Movie" with properties for title, genre, and release year. Include a method to display the movie details. Create two instances of the 'Movie' class and display their details.
// class Movie {
//     constructor(title, genre, year) {
//         this.title = title,
//             this.genre = genre,
//             this.year = year
//     }
//     details() {
//         console.log(`${this.title} is a ${this.genre} movie relased in ${this.year}`);
//     }
// }
// let movie1 = new Movie("Ballad of Songbirds and Snakes", "dystopian", 2023)
// let movie2 = new Movie("Blade Runner 2049", "sci-fi", 2017)
// movie1.details()
// movie2.details()

// 2 Write a JavaScript program to create a class called 'Triangle' with properties for side1, side2, and side3. Include a method to calculate the perimeter of the triangle. Create an instance of the 'Triangle' class and calculate its perimeter.
// class Triangle {
//     constructor(side1, side2, side3) {
//         this.side1 = side1
//         this.side2 = side2
//         this.side3 = side3
//     }
//     perimeter() {
//         console.log(this.side1 + this.side2 + this.side3);
//     }
// }
// let tri = new Triangle(3, 4, 2)
// tri.perimeter()

// 3 Write a JavaScript program that creates a class called 'Library' with properties for library name and books. Include methods to add a book, remove a book, and display all books. Create an instance of the 'Library' class and perform operations to add and remove books.
// class Library {
//     constructor(libName) {
//         this.libName = libName
//         this.bookName = []
//     }
//     add(book) {
//         this.bookName.push(book)
//     }
//     remove(bookTitle) {
//         this.bookName = this.bookName.filter(book => book != bookTitle)
//     }
//     display() {
//         this.bookName.forEach(book=>console.log(book))
//     }
// }
// let book1 = new Library("Central")
// book1.add("Ready Player Two")
// book1.add("Ready Player One")
// book1.remove("Ready Player One")
// book1.remove("Ready Player Two")
// book1.add("Harry Potter")
// book1.add("The Maze Runner")
// console.log(book1);
// book1.display()

// 4 Create a class Student with properties for name, age, and grade. Include a method to display student details. Create an array of students and display their details. + methods for different conditions
// class Student {
//     constructor(name, age, grades) {
//         this.name = name
//         this.age = age
//         this.grades = grades
//     }
//     gradeCheck() {
//         let points = this.grades.filter(grad => grad > 5)
//         return `${this.name} has ${points}`
//     }
// }
// let stud1 = new Student("tom", 19, [6, 8, 7])
// let stud2 = new Student("lily", 29, [1, 6, 3])
// console.log(stud1.gradeCheck());

// 5 Write a JavaScript program that creates a class called 'Recipe' with properties for title, ingredients, and instructions. Include a method to display recipe details. Create a subclass called 'HealthyRecipe' that inherits from the 'Recipe' class and adds a property for calorie count. Override the display method to include the calorie count. Create instances of both classes and display their details.
// class Recipe {
//     constructor(title, ingredients, instructions) {
//         this.title = title
//         this.ingredients = ingredients
//         this.instructions = instructions
//     }
//     display() {
//         return `${this.title} requires ${this.ingredients} and has to ${this.instructions}`
//     }
// }
// let dish1 = new Recipe("Beef", "beef, salt, pepper, butter", "mix all up together and cook for 40 minutes in oven at 250 degrees ")

// console.log(dish1.display());

// class HealthyType extends Recipe {
//     constructor(title, ingredients, instructions, calorie) {
//         super(title, ingredients, instructions)
//         this.calorie = calorie
//     }
//     display() {
//         return `${this.title} requires ${this.ingredients} and has to ${this.instructions} and total ${this.calorie} calories`
//     }
// }
// let dish2 = new HealthyType("Chicken", "chicken, salt, pepper, onion, butter", "mix all up together and cook for 20 minutes in oven at 250 degrees", 2000)
// console.log(dish2.display());



////////////////////Custom Methods////////////////////
// 6 Custom method to find the sum of all elements in the array
// Array.prototype.findSum=function(){
//     let sum=0
//     for(i=0; i<this.length; i++){
//         sum+=this[i]
//     }
//     return sum
// }

// Array.prototype.findSum = function () {
//     return this.reduce((acc, current) => acc + current, 0)
// }
// arr = [4, 2, 5, 5]
// console.log(arr.findSum());

// 7 Custom method to filter out even numbers from the array
// Array.prototype.filteredEven=function(){
//     return this.filter(item =>item%2==0)
// }
// arr = [4, 2, 5, 5]
// console.log(arr.filteredEven());

// 8 Custom method filter
// Array.prototype.filtered = function (item) {
//     let arr=[]
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] != item) {
//             arr.push(this[i])
//         }
//     }
//     return arr
// }
// arr = [4, 2, 5, 5]
// console.log(arr.filtered(4));

// 9 Custom method to square each element in the array
// Array.prototype.square=function(){
//     return this.map(item=> item*item)
// }
// arr = [4, 2, 5, 5]
// console.log(arr.square());

// 10 Custom method to check if all elements are positive
// Array.prototype.positive=function(){
//     return this.every(item=>item>0)
// }
// Array.prototype.positiveHas=function(){
//     return this.some(item=>item>0)
// }
// arr = [4, 2, 5, -5]
// console.log(arr.positive());
// console.log(arr.positiveHas());

// 10 Find avarage of numbers in array
// Array.prototype.avarage = function () {
//     let avarg = this.reduce((acc, num) => acc + num, 0)
//     return Math.round(avarg / this.length)
// }
// arr = [4, 2, 15, -15, 2309, 3221, 12]
// console.log(arr.avarage());



////////////////////Callback////////////////////
// let sumer = function (num1, num2) {
//     return num1 + num2
// }
// let multi = function (num1, num2) {
//     return num1 * num2
// }
// let power = function (num1, num2) {
//     return num1 ** num2
// }
// function funct(num1, num2, sum, product, pow) {
//     return `${sum(num1, num2)}, ${product(num1, num2)}, ${pow(num1, num2)}`
// }
// console.log(funct(4, 3, sumer, multi, power));



////////////////////Reduce////////////////////
// let arr = [3, 2, 7, 8]
// let sum = arr.reduce((num1, num2) => num1 + num2)
// let pow = arr.reduce((num1, num2) => num1 ** num2)
// let prod = arr.reduce((num1, num2) => num1 * num2)
// console.log(sum);
// console.log(pow);
// console.log(prod);



////////////////////Entries////////////////////
// let arr = ["3", 2, "7", 8]
// arrEnt = arr.entries()
// const fruits = ['apple', 'banana', 'orange'];

// const entries = fruits.entries();
// let pushes=[]
// for (const entry of entries) {
//     pushes.push(entry)
// }
// console.log(pushes);



////////////////////Keys////////////////////
// let person = {
//     name: "John",
//     surname: "Doe",
//     age: 29
// }
// let arr = [3, 2, 7, 8]
// console.log(Object.keys(person));
// arr.forEach(i => {
//     console.log([i])
// })
// document.addEventListener('keydown', (event) => {
//     console.log(event.key); // logs the key pressed
// });



////////////////////Keys////////////////////
// let arr = [3, 2, 7, 8]
// let str = ["apple", "banana", "orange"]
// console.log(arr.sort((a, b) => b - a));
// console.log(str.sort((a, b) => b - a));



//extras
////3. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik element ilə ən böyük elementin ədədi ortasıdır.
let arr = [3, 2, 5, 9, 78, 99, 7, 8]
max = arr[0]
min = arr[0]
let sum = arr.reduce((num1, num2) => num1 + num2)
let median = arr.sort((a, b) => a - b)
let medArr = (median[0] + median[median.length - 1]) / 2


console.log(sum);
console.log(medArr);