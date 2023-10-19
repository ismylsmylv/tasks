//obj
//console all
let students = [
    {
        id: 1,
        name: "asmar",
        age: 19,
        kesr: false,
        hobbies: ["shopping", "restoran", "travel"],
        password: {
            email: "asmar@mail.com",
            pass: "12345",
            memmbers: {
                qardas: "qardas",
            },
        },
    },
    {
        id: 2,
        name: "shanana",
        age: 20,
        kesr: true,
        hobbies: ["kitab", "resm"],
        password: {
            email: "shana@mail.com",
            pass: "123456",
            memmbers: {
                qardas: "qardas",
            },
        },
    },
    {
        id: 3,
        name: "nicat",
        age: 21,
        kesr: false,
        password: {
            email: "nicat@mail.com",
            pass: "1234569",
        },
    },
    {
        id: 4,
        name: "ayan",
        age: 22,
        kesr: true,
        hobbies: ["mahni oxumaq", "mahni qulaq asmaq"],
        password: {
            email: "ayan@mail.com",
            pass: "123456",
            memmbers: {
                qardas: "qardas",
                baci: "baci",
            },
        },
    },
];
// let arr=students.forEach(element => {
//     console.log(element);
// });


//console element names
// let arr=students.map(element => {
//     console.log(element.name);
// });


//kesri olanlar, bacisi olanlar, telebe yaslar

//kesri olanlar
// let arr=students.map(element=>{
//     if(element.kesr){
//         console.log(element.name);
//     }
// })

//bacisi olanlar
// let arr = students.map(element => {
//     if (element.password.memmbers?.hasOwnProperty("baci")) {
//         console.log(element.name);
//     }
// })

//yas cemi
let sum = 0
let arr = students.map(element => {
    sum += element.age;
    return sum
})
console.log(sum);

