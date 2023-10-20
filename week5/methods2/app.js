// arr = [
//     {
//         name: "john",
//         age: 28
//     },
//     {
//         name: "tom",
//         age: 9
//     },
//     {
//         name: "ellen",
//         age: 29
//     },
//     {
//         name: "taylor",
//         age: 32
//     },
//     {
//         name: "mark",
//         age: 91
//     },
// ]
// let min = arr[0].age
// let max = arr[0].age
// let difference = arr.map(element => {
//     // if (min > element.age) {
//     //     let elementMin = min
//     //     console.log(elementMin);
//     // }
//     // if (max < element.age) {
//     //     let elementMax = max
//     //     console.log(elementMax);
//     // }
//     // let dif = elementMax - elementMin
//     let minValue = Math.min(...this.arr)
//     let maxValue = Math.max(...this.arr);
//     let arr2 = arr.push(minValue, maxValue)
//     return arr2
// })
// console.log(difference);
// // console.log(arr[2].age);

// str = "testname"
// String.prototype.myFirstIndex = function () {
//     return this[0]
// }
// console.log(str.myFirstIndex());

str = "testname"
String.prototype.myLength = function () {
    let len = 0
    
    for (let i = 0; i < Infinity; i++) {
        if (i)
            len++
        else {
            break
        }
    }
    return len
}
console.log(str.myLength());