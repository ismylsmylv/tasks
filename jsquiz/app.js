// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4]


//bool neighbours +++
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "boolean") {
//         console.log(arr[i - 1], arr[i + 1]);
//     }
// }


//sum without min and max
// let min = arr[0]
// let max = arr[0]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if(min>arr[i]){
//         min=arr[i]
//     }
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==max||arr[i]==min){
//         continue
//     }
//     sum+=arr[i]
// }
// console.log(sum);


//cut min tek max swap
// let min = arr[0]
// let max = arr[0]
// let minIndex = 0
// let maxIndex = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         if (min > arr[i]) {
//             min = arr[i]
//             minIndex = i
//         }
//     }
//     else {
//         if (max < arr[i]) {
//             max = arr[i]
//             maxIndex = i
//         }
//     }
// }
// let temp = arr[minIndex]
// arr[minIndex] = arr[maxIndex]
// arr[maxIndex] = temp
// console.log(arr);



//all uppercase itself and index
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//         if (arr[i] === arr[i].toUpperCase()) {
//             console.log(arr[i], i);
//         }
//     }
// }


//has more than 2 uppercase
// let count = 0
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//         count = 0
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === arr[i][j].toUpperCase()) {
//                 count++
//                 if (count > 2) {
//                     console.log(arr[i]);
//                 }
//             }
//         }
//     }
// }

let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4]
let min = arr[0]
let max = arr[0]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if(min>arr[i]){
        min=arr[i]
    }
    if(max<arr[i]){
        max=arr[i]
    }
}
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==max||arr[i]==min){
        continue
    }
    sum+=arr[i]
}
console.log(sum);