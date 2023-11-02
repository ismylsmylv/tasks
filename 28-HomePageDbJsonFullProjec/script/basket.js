let cartList = document.querySelector(".cartList")
let cartItemCount = document.querySelector(".cartItemCount")
let sup = document.querySelector("sup")
// let sup = document.querySelector(".sup")
let localCart = JSON.parse(localStorage.getItem("cartMeals"))
let totalPriceInCheckOut = document.querySelector(".totalPriceInCheckOut")
let count = 0
let total = 0
for (let elem of localCart) {
    // console.log(elem);
    count++
    sup.textContent = count
    // sup.textContent = count
    cartItemCount.textContent = `${count} items`
    cartList.innerHTML += `
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div class="flex w-2/5"> <!-- product -->
                        <div class="w-20">
                            <img class="h-24" style="object-fit:cover" src="${elem.image}"
                                alt="">
                        </div>
                        <div class="flex flex-col justify-between ml-4 flex-grow">
                            <span class="font-bold text-sm">${elem.name}</span>
                            <a class="removeCart font-semibold hover:text-red-500 text-gray-500 text-xs" style="cursor:pointer; color:red">Remove</a>
                        </div>
                    </div>
                    <div class="flex justify-center w-1/5 countBtns">
                        <svg class="fill-current decrease text-gray-600 w-3" viewBox="0 0 448 512">
                            <path
                                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>

                        <input class="mx-2 border innerCount text-center w-8" type="text" value="1">

                        <svg class="fill-current increase text-gray-600 w-3" viewBox="0 0 448 512">
                            <path
                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                        </svg>
                    </div>
                    <span class="text-center w-1/5 font-semibold text-sm totalOne">$${elem.price}</span>
                    <span class="text-center w-1/5 font-semibold text-sm totalAll">$${elem.price}</span>
                </div>
    `
    total += elem.price
    totalPriceInCheckOut.textContent = `$${total}`
    console.log(elem.price);
    let countBtns = document.querySelectorAll(".countBtns")
    for (let btn of countBtns) {

        let innerCount = btn.querySelector(".innerCount")
        let decreaseBtn = btn.querySelector(".decrease")
        let increaseBtn = btn.querySelector(".increase")
        let number = innerCount.value
        let count = 1
        let totalOne=0
        let totalAll = document.querySelector(".totalAll")
        let totalPriceInCheckOut = document.querySelector(".totalPriceInCheckOut")
        let totalAllNum = 0
        let totalPriceInCheckOutSum=0
        decreaseBtn.addEventListener("click", function () {
            innerCount.value = number
            number = --count
            totalOne -= elem.price * number
            console.log(totalOne);
            totalAll.textContent = totalOne
            totalPriceInCheckOutSum-=totalOne
            totalPriceInCheckOut.textContent = totalPriceInCheckOutSum
        })
        increaseBtn.addEventListener("click", function () {
            innerCount.value = number
            number = count++
            totalOne += elem.price * number
            console.log(totalOne);
            totalAll.textContent = totalOne
            totalPriceInCheckOutSum+=totalOne
            totalPriceInCheckOut.textContent = totalPriceInCheckOutSum
        })
    }
    // for (let countBtn of countBtns) {
    //     let innerCount = document.querySelectorAll(".innerCount")
    //     let decreaseBtn = document.querySelectorAll(".decrease")
    //     let increaseBtn = document.querySelectorAll(".increase")
    //     for (let number of innerCount) {
    //         let count = 1
    //         for (btn of decreaseBtn) {
    //             btn.addEventListener("click", function () {

    //                 number.value = --count


    //             })
    //         }
    //         for (btn of increaseBtn) {
    //             btn.addEventListener("click", function () {

    //                 number.value = ++count
    //             })
    //         }
    //     }
    // }



    let removeCart = document.querySelectorAll(".removeCart")
    for (let btn of removeCart) {
        btn.addEventListener("click", function () {
            console.log(this.parentElement.parentElement.parentElement.remove());
            --count
            cartItemCount.textContent = `${count} items`
            sup.textContent = count
            total = total - elem.price
            totalPriceInCheckOut.textContent = `$${total}`

        })
    }




}