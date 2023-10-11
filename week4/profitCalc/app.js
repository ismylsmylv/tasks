// let productName = prompt("Enter product name")
// let productCostPrice = Number(prompt("Enter cost price"))
// let productSalePrice = Number(prompt("Enter sale price"))
// if (confirm(`Does ${productName} has discount percentage?`)) {
//     productDiscountPercentage = Number(prompt("Enter discount percentage"))
//     profitDiscounted = productSalePrice - (productSalePrice * productDiscountPercentage / 100) - productCostPrice
//     alert(`${productName} has ${profitDiscounted} usd profit`)

// } else {
//     let profit = productSalePrice - productCostPrice
//     alert(`${productName} has ${profit} usd profit`)
// }



let productName = prompt("Enter product name")
let productCostPrice = Number(prompt("Enter cost price"))
let productSalePrice = Number(prompt("Enter sale price"))
if (productCostPrice > productSalePrice) {
    alert("Cost can not be more than price")
}
else {
    if (confirm(`Does ${productName} has discount percentage?`)) {
        productDiscountPercentage = prompt("Enter discount percentage")
        if (productDiscountPercentage > (productSalePrice - (productSalePrice * productDiscountPercentage / 100) - productCostPrice)) {
            alert(`Discount can not be more than price`)
        } else {
            profitDiscounted = productSalePrice - (productSalePrice * productDiscountPercentage / 100) - productCostPrice
            alert(`${productName} has ${profitDiscounted} usd profit`)
        }
    }
    else {
        let profit = productSalePrice - productCostPrice
        alert(`${productName} has ${profit} usd profit`)
    }
}   
