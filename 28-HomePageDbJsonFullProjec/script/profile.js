let content = document.querySelector(".content")
let url = "http://localhost:3000/users/"
let userId = JSON.parse(localStorage.getItem("loginId"))
let orders = (JSON.parse(localStorage.getItem("finOrders")))

if (!orders) {
    orders = "No order history"
}

console.log(userId);
fetch(url).then(res => res.json()).then(data => {
    for (let elem of data) {
        if (elem.id == userId) {
            content.innerHTML = `<section style="font-family: Montserrat"
class=" bg-[#ffffff] flex font-medium items-center justify-center mt-6">
<section class="w-64 mx-auto bg-[#374151] rounded-2xl p-6 shadow-lg">
    <div class="flex items-center justify-between">
    </div>
    <div class="mt-6 w-fit mx-auto">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU" class="rounded-full w-28 "
            alt="profile picture" srcset="">
    </div>
    <div class="mt-8 ">
        <h2 class="text-white font-bold text-2xl tracking-wide username">${elem.username}</h2>
    </div>
    <div class="mt-3 text-white text-sm email">
        <span class="text-gray-400 font-semibold">Email:</span>
        <span>${elem.email}</span>
    </div>
    <div class="mt-3 text-white text-sm balance">
        <span class="text-gray-400 font-semibold">Balance:</span>
        <span>$${elem.balance}</span>
    </div>
    <div class="mt-3 text-white text-sm balance">
        <span class="text-gray-400 font-semibold">Orders:</span>
        <span style="width=100%; word-wrap: break-word">${orders}</span>
    </div>
</section>
</section>`
        }

    }
})



let isLogged = JSON.parse(localStorage.getItem("loginId"))
console.log(isLogged);
let profile = document.querySelector("#profile")
let logOut = document.querySelector("#logOut")
let login = document.querySelector("#login")
let signup = document.querySelector("#signup")
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