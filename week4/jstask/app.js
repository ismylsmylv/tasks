//task 1
// let times = Number(prompt("enter number"))
// for (let i=0; i < times; i++) {
//     console.log("Hello world");
// }

///task 2
// let sum=1
// let num=Number(prompt("enter number"))
// for(let i=1; i<=num; i++){
//     sum=sum*i;
// }
// alert(sum)

//task 3
// let sum = 0
// let num1 = Number(prompt("enter number 1"))
// let num2 = Number(prompt("enter number 2"))
// if (num1 > num2) {
//     num2 = Number(prompt("enter number 2 again"))
//     for (let i = num1; i <= num2; i++) {
//         sum = sum + i;
//     } alert(sum)
// }
// else {
//     for (let i = num1; i <= num2; i++) {
//         sum = sum + i;
//     } alert(sum)
// }

//task 4
// let num = Number(prompt("enter number"))
// let count = 0

// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     count++;
// }
// console.log(count)

//task 5 prev
// let word=prompt("enter word")
// alert(word.length)

//task 5
// let count=0
// let str = prompt("enter string")
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == ",") {
//         count++
//     }
// }
// alert(`string has ${count+1} words`)



//task 6
// let num=Number(prompt("enter number"))
// let pow=Number(prompt("enter power"))
// alert(num **pow)

//arrays
// task 1
// let arr=[23, 45, 23, 12, 6, 9]
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(Math.round(sum/arr.length))

//task 2
let arr = [23, 45, 23, 12, 6, 9]
let max = arr[0]
let min = arr[0]
for (let i = arr[0]; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    }
    if (min > arr[i]) {
        min = arr[i]
    }
}
console.log(min)
console.log(max)
console.log((min+max)/2)



//task 3
//arraydaki sade ededlerin sayi
// let arr = [23, 5, 19, 18, 56, 28]
// let count = 0
// let countSade = 0
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[i] % j == 0) {
//             count++
//             console.log(count)
//             if (count == 2) {
//                 countSade++
//             }
//         }

//     }
// }
// console.log(countSade)