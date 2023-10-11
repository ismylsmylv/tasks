// let age;
// let ticketPrice=10;
// let balance;
// age=Number(prompt("enter your age"))
// if (age<18){
//     alert("invalid session")
// }
// else {
//     balance=prompt("enter your balance")
//     if(balance<ticketPrice){
//         alert(`insufficent funds, balance is ${balance}`)
//     }
//     else if(age==18){
//         balance-=ticketPrice/2
//         alert(`balance is ${balance}, discount applied`)
//     }
//     else{
//         balance -=ticketPrice
//         alert(`balance is ${balance}`)
//     }
// }


let age;
let ticketPrice = 10;
let balance;
let person
age = Number(prompt("enter your age"))
if (age < 18) {
    alert("invalid session")
}
else {
    balance = Number(prompt("enter your balance"))
    person = Number(prompt("enter ticket count"))
    if (balance < ticketPrice * person) {
        alert(`insufficent funds, balance is ${balance}`)
    }
    else if (age == 18) {
        if (balance < (ticketPrice / 2) * person) {
            alert(`insufficent funds, balance is ${balance}`)
        }
        else {
            ticketPrice = ticketPrice / 2
            balance -= person * ticketPrice
            alert(`balance is ${balance}, discount applied`)
        }
    }
    else {
        balance -= person * ticketPrice
        alert(`bought ${person} tickets,balance is ${balance}`)
    }
}