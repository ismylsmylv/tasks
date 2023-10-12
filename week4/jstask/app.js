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
//task 1
let arr=Number(prompt("enter numbers"))
let sum=0
let res
let i
for(i=0; i< arr.lenght; i++){
    sum=sum+arr[i];
     
}
res=sum/i
alert(res)
