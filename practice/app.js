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

////////////////////GPT-made////////////////////
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
class Library {
    constructor(libName) {
        this.libName = libName
        this.bookName = []
    }
    add(book) {
        this.bookName.push(book)
    }
    remove(bookTitle) {
        this.bookName = this.bookName.filter(book => book != bookTitle)
    }
    display() {
        this.bookName.forEach(console.log(this.bookName))
    }
}
let book1 = new Library("Central")
book1.add("Ready Player Two")
book1.add("Ready Player One")
book1.remove("Ready Player One")
book1.remove("Ready Player Two")
book1.add("Harry Potter")
book1.add("The Maze Runner")
console.log(book1);
book1.display()
