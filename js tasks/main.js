//12. Verilmiş ədədi rəqəmlərinə ayıran proqram
// let num = Number(prompt("Enter number"));
// while (num > 0) {
//     let a = num % 10;
//     num = (num - a) / 10;
//     console.log(a);
// }

//13. Verilmiş ədədin rəqəmlərindən ən böyüyünü tapan proqram
// let num = Number(prompt("Enter number"));
// let count = 0;
// let max=0;
// while (num > 0) {
//     let a = num % 10;
//     if(max<a){
//         max=a;
//     }
//     num = (num - a) / 10;

// }
// alert(max);

//14. Verilmiş ədədin rəqəmlərindən ən kiçiyini tapan proqram
// let num = Number(prompt("Enter number"));
// let count = 0;
// let min=9
// while (num > 0) {
//     let a = num % 10;
//     if(min>a){
//         min=a;
//     }
//     num = (num - a) / 10;

// }
// alert(min);

//15. Verilmiş ədədin rəqəmlərinin cəmi, hasili və ədədi ortasını tapan proqram tərtib edin
// let num = Number(prompt("Enter number"));
// let count = 0;
// let sum=0;
// let product=1
// let mid=0;
// while (num > 0) {
//     let a = num % 10;
//     num = (num - a) / 10;
//     sum+=a;
//     product=product*a;
//     count++;
// }
// mid=Math.round((sum/count))
// alert(`sum is ${sum}, mid is ${mid}, product is ${product}`);

//16. Verilmiş ədədin bütün bölənlərini tapan proqram tərtib edin
// let dividers = [];
// let num = Number(prompt("Enter number"));
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         dividers.push(i);
//     }
// }
// alert(`Dividers are ${dividers.join(', ')}`);

//17. Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin
// let dividers = [];
// let count=0;
// let num = Number(prompt("Enter number"));
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         count++
//     }
// }
// alert(count);

//Verilmiş ədədlərin sadə və mürəkkəb olduğunu tapan proqram 
let numbers = [7, 27, 48, 10];
let count = 0;

for (let j = 0; j < numbers.length; j++) {
    let currentNumber = numbers[j];
    let dividersCount = 0;

    for (let i = 1; i <= currentNumber; i++) {
        if (currentNumber % i === 0) {
            dividersCount++;
        }
    }

    if (dividersCount === 2) {
        alert(`${currentNumber} is sade`);
    } else {
        alert(`${currentNumber} is murekkeb`);
    }
}