// class rect{
//     constructor(sddsdsds,dsdsdsd){
//         this.dsdsdsd=dsdsdsd
//     }
// }
// let rec=new rect("dsdd", "sdddd")


//
class Product {
    #costPrice;
    constructor(name, salePrice = 0, costPrice = 0, isDiscounted = false, discountPercentage = 0) {
        this.name = name,
            this.salePrice = salePrice,
            this.isDiscounted = isDiscounted,
            this.#costPrice = costPrice,
            this.discountPercentage = discountPercentage
    }
    getProfit() {
        let profit = 0
        if (this.isDiscounted) {
            profit = this.salePrice - ((this.salePrice * this.discountPercentage) / 100) - this.#costPrice
        }
        else {
            profit = this.salePrice - this.#costPrice
        }
        return profit
    }
}
let cola = new Product("cola", 12, 3)
let watch = new Product("rolex", 2500, 300, true, 20)
let car = new Product("kia", 25000, 13000, false, 20)
// console.log(cola);
// console.log(watch);
console.log(cola.getProfit());
console.log(watch.getProfit());
console.log(car.getProfit());