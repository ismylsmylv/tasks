let employee1 = {
    fullName: "John Doe",
    salary: 2000,
    department: "HR",
    age: 23,
    isMarried: false,
    isMale: true,
}
let employee2 = {
    fullName: "Lucy Gray",
    salary: 2200,
    department: "IT",
    age: 78,
    isMarried: true,
    isMale: false,
}
let employee3 = {
    fullName: "Ben Stone",
    salary: 2500,
    department: "Finance",
    age: 44,
    isMarried: true,
    isMale: true,
}
let employee4 = {
    fullName: "Michelia Stone",
    salary: 500,
    department: "Marketing",
    age: 79,
    isMarried: false,
    isMale: false,
}
let employees = [employee1, employee2, employee3, employee4]



// 1 avg salary
// let sum=0
// let count=0
// for (let i=0; i<employees.length; i++){
//     sum+= ;
//     count++
// }
// console.log(sum/count);


// 2 isMale
//let sum=0
// let count = 0
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].isMale) {
//         count++
//     }
// }
// console.log(count);


// 3 older than 60 
// let count = 0
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].age > 60) {
//         employees.splice((i,1))
//     }
// }
// console.log(employees);


// 4 isMarried 
// let count = 0
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].isMarried) {
//         alert(employees[i].fullName)
//     }
// }

// 5 salary increase
// let count = 0
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].salary <1000) {
//         employees[i].salary+=500
//     }
// }
// console.log(employees);

// 6 works at IT
// let count=0
// let arrIT=[]
// for(let i=0; i<employees.length; i++){
//     if(employees[i].department=="IT")
//         arrIT.push(employees[i])
// }
// console.log(arrIT);

// 7 max salary finance
// let count=0
// let max=employees[0].salary
// for(let i=0; i<employees.length; i++){
//     if(employees[i].department=="Finance"){
//         for(let j=0; j<employees.length; j++){
//             if(max<employees[i].salary)
//             max=employees[i].salary
//         }
//     }
// }
// console.log(max);

// 8 min salary increase
let count = 0
let salary = 0
let min = employees[0].salary
for (let i = 0; i < employees.length; i++) {
    if (min > employees[i].salary) {
        min = employees[i].salary
    }

}
for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary == min) {
        employees[i].salary += 3000
    }

}
console.log(employees);
