//string methods
//capitalize
// String.prototype.capitalizer = function () {
//     word = []
//     for (let i = 0; i < this.length; i++) {
//         word += this[i].toUpperCase()
//     }
//     return word              ---return this[0].toUpperCase()+slice(1)
// }
// let str = "string"
// console.log(str.capitalizer());

//isBlank
// String.prototype.isBlank = function () {
//     checker = false
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] === " ") {
//             checker = true
//         }
//         else {
//             checker = false
//             break
//         }
//     }
//     return checker
// }
// let str = " "
// let str2 = " 5 "
// let str3 = "asd"
// let str4 = "   "
// console.log(str.isBlank());
// console.log(str2.isBlank());
// console.log(str3.isBlank());
// console.log(str4.isBlank());

//custom concat
// String.prototype.concated = function (str1, str2) {
//     return str1 + str2               ---for(i<arguments.lenght)
// }
// let str = ""
// console.log(str.concated("asd", "fgh"));

//custom replace            ---word change missing
// String.prototype.replaced = function (symbol, changed) {
//     modStr = ""
//     count = true
//     for (let i = 0; i < this.length; i++) {
//         for (let j = 0; j < symbol.length; j++) {
//             if (this[j] === symbol[j] && count) {
//                 modStr += changed[j]
//                 count = false
//             }
//             else {
//                 modStr += this[i]
//             }
//         }
//     }
//     return modStr
// }
// str = "Hi World"
// console.log(str.replaced("Hi", "hello"));




//custom replaceAll
// String.prototype.replacedAll = function (symbol, changed) {
//     modStr = ""
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] === symbol) {
//             modStr += changed
//         }
//         else {
//             modStr += this[i]
//         }
//     }
//     return modStr
// }
// str = "salam"
// console.log(str.replacedAll("a", "f"));



//array methods
//forEach
Array.prototype.forEachEd = function () {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
    }
}
let arr = [9, 2, 23]
console.log(arr.forEachEd());

//map

//filter
// let arr = [9, 2, 23]
// Array.prototype.filtered=function(element){
//     for(let i=0; i<this.length; i++){
//         if(this[i]==element){
//             return element
//         }
//     }
// }
// console.log(arr.filtered(1));