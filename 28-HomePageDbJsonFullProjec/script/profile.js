let content = document.querySelector(".content")
let url = "http://localhost:3000/users/"
let userId = JSON.parse(localStorage.getItem("loginId"))
console.log(userId);
fetch(url).then(res => res.json()).then(data => {
    for (let elem of data) {
        if (elem.id == userId) {
            content.innerHTML = `<section style="font-family: Montserrat"
class=" bg-[#ffffff] flex font-medium items-center justify-center mt-6">
<section class="w-64 mx-auto bg-[#374151] rounded-2xl px-8 py-6 shadow-lg">
    <div class="flex items-center justify-between">
    </div>
    <div class="mt-6 w-fit mx-auto">
        <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" class="rounded-full w-28 "
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
        <span>${elem.balance}</span>
    </div>
    <div class="mt-3 text-white text-sm balance">
    <span class="text-gray-400 font-semibold">Orders:</span>
    <span>${elem.orders}</span>
</div>
</section>
</section>`
        }

    }
})
