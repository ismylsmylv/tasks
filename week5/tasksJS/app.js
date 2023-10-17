//check if number is prime
// function IsPrime(num) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             count++;
//         }
//         if (num == 1) {
//             return 0;
//         }
//     }
//     if (count == 2) {
//         return true;
//     }
//     else {
//         return false
//     }

// }
// console.log(IsPrime(1));
// console.log(IsPrime(23));
// console.log(IsPrime(6578));


let arr = [7, 6, 5, 13, 14, 17, 55, 11, 4, 8]
//count prime elements
// function PrimeQuantity(arr) {
//     let primeCount = 0
//     for (j = 0; j < arr.length; j++) {
//         let count = 0;
//         for (let i = 1; i <= arr[j]; i++) {
//             if (arr[j] % i === 0) {
//                 count++;
//             }
//         }
//         if (count == 2) {
//             primeCount++
//         }
//     } return primeCount;
// }

//count prime elements (teacher's version)
// function PrimeQuantity(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (IsPrime(arr[i])) {
//             count++
//         }
//     }
//     return count
// }
// console.log(PrimeQuantity(arr));


//object
let car = {
    brand: "Toyota",
    model: "N05",
    year: 2017,
    fuelPerKm: 5,
    fuelCapacity: 15,
    currentFuel: 10,
    milAge:5000,
    increaseFuel: function (fuel) {
        if ((this.currentFuel + fuel) > this.fuelCapacity) {
            alert("not enough space")
        }
        else {
            this.currentFuel+=fuel
            alert(`fuel increased ${fuel}`)
        }
    },
    drive: function (km) {
        if ((this.fuelPerKm * km) > this.currentFuel) {
            alert("cant drive")
        }
        else{
            alert("possible")
            this.milAge+=km
            console.log(this.milAge);
        }
    }
}

car.increaseFuel(3)
car.drive(1)
console.log(car);