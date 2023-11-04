let isLogged = JSON.parse(localStorage.getItem("loginId"))
console.log(isLogged);
let profile = document.querySelector("#profile")
let logOut = document.querySelector("#logOut")
let login = document.querySelector("#login")
let signup = document.querySelector("#signup")
let finOrders = JSON.parse(localStorage.getItem("finOrders")) || [];
if((JSON.parse(localStorage.getItem("finOrders")))){
    finOrders=[...finOrders]
}
if (isLogged) {
    login.style.display = "none"
    signup.style.display = "none"
}
else {
    profile.style.display = "none"
    logOut.style.display = "none"
}
logOut.addEventListener("click", function (e) {
    e.preventDefault()
    localStorage.removeItem("loginId")
    window.location.href = './index.html'
})
let cartList = document.querySelector(".cartList");
let cartItemCount = document.querySelector(".cartItemCount");
let sup = document.querySelector("sup");
let localCart = JSON.parse(localStorage.getItem("cartMeals"));
let totalPriceInCheckOut = document.querySelector(".totalPriceInCheckOut");
let count = 0;
let total = 0;
let totalPriceInCheckOutSum
// sup.textContent=JSON.parse(localStorage.getItem("cartMeals")).length()
for (let index = 0; index < localCart.length; index++) {
    let elem = localCart[index];
    count++;
    sup.textContent = count;
    cartItemCount.textContent = `${count} items`;

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

        <input class="mx-2 border innerCount text-center w-8" type="text" value="${elem.count}">

        <svg class="fill-current increase text-gray-600 w-3" viewBox="0 0 448 512">
            <path
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
    </div>
    <span class="text-center w-1/5 font-semibold text-sm totalOne"><span>$</span><span>${elem.price}</span></span>
    <span class="text-center w-1/5 font-semibold text-sm totalAll">$${elem.price}</span>
</div>
    `;
    total += elem.price;
    totalPriceInCheckOut.textContent = `$${total.toFixed(2)}`;

    let countBtns = document.querySelectorAll(".countBtns");

    //count changes
    for (let btn of countBtns) {
        let onePrice = parseInt(btn.nextElementSibling.lastChild.textContent)
        console.log(onePrice);
        let innerCount = btn.querySelector(".innerCount");
        let decreaseBtn = btn.querySelector(".decrease");
        let increaseBtn = btn.querySelector(".increase");
        let totalAll = btn.nextElementSibling.nextElementSibling;

        decreaseBtn.addEventListener("click", function () {
            let number = parseInt(innerCount.value);
            console.log(onePrice);
            if (number > 1) {
                number--;
                innerCount.value = number;
                changeTotalAll + -(onePrice, number, totalAll, index);
            }
        });

        increaseBtn.addEventListener("click", function () {
            let number = parseInt(innerCount.value);
            number++;
            innerCount.value = number;
            changeTotalAll(onePrice, number, totalAll, index);
        });

        let removeCart = document.querySelectorAll(".removeCart");
        for (let btn of removeCart) {
            btn.addEventListener("click", function () {
                let itemTotal = parseFloat(totalAll.textContent.replace("$", ""));
                count--;
                cartItemCount.textContent = `${count} items`;
                total -= itemTotal;
                totalPriceInCheckOut.textContent = `$${total.toFixed(2)}`;
                this.parentElement.parentElement.parentElement.remove();
                localCart.splice(index, 1);
                localStorage.setItem("cartMeals", JSON.stringify(localCart));
                let cartMeals = JSON.parse(localStorage.getItem("cartMeals"));
                let sup = document.querySelector("sup")

                sup.textContent = cartMeals.length;

            });
        }
        //remove all
        let remover = document.querySelector(".removeAllTotal")
        remover.addEventListener("click", function (e) {
            e.preventDefault()
            cartList.innerHTML = ''
            localStorage.removeItem("cartMeals")
            total = 0
            cartItemCount.textContent = "0 Items"
            totalPriceInCheckOut.lastElementChild.textContent = "$0"
            let cartMeals = JSON.parse(localStorage.getItem("cartMeals"));
            let sup = document.querySelector("sup")

            sup.textContent = "0";

        })
    }

}

//function
function changeTotalAll(price, count, totalAllElement, index) {
    let totalOne = price * count;
    totalAllElement.textContent = `$${totalOne.toFixed(2)}`;
    localCart[index].count = count;
    localStorage.setItem("cartMeals", JSON.stringify(localCart));
    changeTotalPriceCheckout();
}

function changeTotalPriceCheckout() {
    let totalAllElements = document.querySelectorAll(".totalAll");
    let totalPriceInCheckOutSum = 0;

    totalAllElements.forEach((element) => {
        totalPriceInCheckOutSum += parseFloat(element.textContent.replace("$", ""));
    });

    totalPriceInCheckOut.textContent = `$${totalPriceInCheckOutSum.toFixed(2)}`;
    // console.log(totalPriceInCheckOutSum);

}

let orders = []
let checkBtn = document.querySelector(".checkBtn")
checkBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let totalForCheckRaw = document.querySelector("#totalForCheck")
    let totalForCheck = parseFloat(totalForCheckRaw.textContent.replace("$", ""))
    if (JSON.parse(localStorage.getItem("loginId"))) {
        if (JSON.parse(localStorage.getItem("loginId"))) {
            fetch("http://localhost:3000/users/").then(res => res.json()).then(data => {
                for (let user of data) {
                    if (user.id == (JSON.parse(localStorage.getItem("loginId")))) {
                        // console.log(user);
                        if (totalForCheck > user.balance) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Insufficent funds',
                                text: '',
                            })
                            console.log(total);
                        }
                        else {
                            let orders = JSON.parse(localStorage.getItem("cartMeals")) || [];


                            for (let order of orders) {
                                finOrders.push(order.name);
                            }
                            localStorage.setItem("finOrders", JSON.stringify(finOrders));
                            console.log((JSON.parse(localStorage.getItem("cartMeals"))));
                            console.log("sent");
                            Swal.fire({
                                icon: 'success',
                                title: 'Order completed',
                                text: '',
                            })
                            fetch("http://localhost:3000/users/" + user.id, {
                                method: "Put",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    "username": user.username,
                                    "password": user.password,
                                    "email": user.email,
                                    "balance": user.balance - totalForCheck,
                                    "orders": finOrders 
                                })
                            })
                            cartList.innerHTML = ''
                            localStorage.removeItem("cartMeals")
                            total = 0
                            cartItemCount.textContent = "0 Items"
                            totalPriceInCheckOut.lastElementChild.textContent = "$0"
                            let cartMeals = JSON.parse(localStorage.getItem("cartMeals"));
                            let sup = document.querySelector("sup")

                            sup.textContent = "0";

                        }
                    }
                }
            })
        }
    }
    else {
        window.location.href = './login.html'
        console.log("chek");
    }

})


console.log();
let balance

// let ordText=orderTotal.querySelector("span").textContent



