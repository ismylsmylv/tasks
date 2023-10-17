// 1 replace _ - 
// str="some_thing_happened not_once"
// console.log(str.replaceAll("_", "-"));

// 2 to lowercase
let str = "TesTString"
let str2 = " TesTString 2 "
let str3 = "js string exercises"
// lower = (arr) => {
//     lowered = arr.toLowerCase()
//     console.log(lower());
//     return lowered
// }
// console.log(lower(str));


// 3 trim with new array, then add '' each --needs improve
// let trim = function (arr) {
//     let trm = arr.trim()
//     let retArr = []
//     for (let i = 0; i < trm.length; i++) {
//         retArr.push(trm[i])
//     }
//     let fin = retArr.join("' '")
//     return fin
// };
//                                                          --return input.trim().split()
// console.log(trim(str2))

// 4 output "robin-singh-from-usa" string
// robin = (str) => {
//     if (str==="let str"){
//         return "robin-singh-from-usa"
//     }
// }                                                        --str.toLowerCase().replaceAll(' ','-')
// console.log(robin(str));

// 5 remove dash and capitalize
// function upper(str) {
//     if (str == "js string exercises") {
//         str.replaceAll("-", " ")
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }
// }
// console.log(upper(str3));

// 6 count uppercases
// function countUpper(str) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toUpperCase() && str[i].trim() !== " ") {
//             count++
//         }
//     }
//     return count
// }
// console.log(countUpper(str3));

//8. Bir Human Function Constructor yaradırsınız. Human-ın name, surname, birthYear, birthCity propert-ləri və getFullName adında bir metodu var, hansı ki fullname-ini qaytarmalıdır (name və surname-i). Bu function constructor-dan istifadə edib 4-5 human yaradın və bir people array-i yaradıb ora yığın. Daha sonra searchHuman adında bir function yazın və bu function sizdən bir search string-i və bir dənə isə haradan axtaracağı array-i qəbul edir. search string-inin dəyərini prompt-dan götürəcəksiniz. Search fullname-ə görə olmalıdır. Yəni mən yalnız name-i yazıb və ya yalnız surname-i yazıb axtarsan ona uyğun data-larımı qaytarmalıdır function. Eyni zaman-da həm name həm də surname-i yazıb axtarsam yenə tapıb qaytarmalıdır. searchByFullName function-ı yaratmalısınız və geriyə kimləri tapdısa, həmin human object-lərini bir array-ə yığıb onu return etməlisiniz.
// function Human(name, surname, birthYear, birthCity) {
//     this.name = name
//     this.surname = surname
//     this.birthYear = birthYear
//     this.birthCity = birthCity
//     this.getFullName = function () {
//         return this.name + " " + this.surname
//     }
// }
// let joe = new Human("joe", "smith", 2000, "London")
// let joe2 = new Human("joe", "joanna", 2000, "London")
// let jane = new Human("jane", "leia", 1999, "Tokyo")
// let people = []
// people.push(joe,joe2, jane)

// let searchInput = prompt("search for human")

// function searchHuman(search, arr) {
//     let result=[]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].name.includes(search.toLowerCase().trim()) || arr[i].surname.includes(search.toLowerCase().trim())) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(searchHuman(searchInput, people));