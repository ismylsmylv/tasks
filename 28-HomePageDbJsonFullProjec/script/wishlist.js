let wishList = document.querySelector(".wishList")
let wishItemfavCount = document.querySelector(".wishItemfavCount")
let favSup = document.querySelector(".favSup")
let favCount=0
// let sup = document.querySelector(".sup")
let favCart = JSON.parse(localStorage.getItem("favorites"))
for (let elem of favCart) {
    favCount++
    favSup.textContent = favCount
    wishList.innerHTML += `
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" style="width:100%">
                    <div class="flex w-2/5"> <!-- product -->
                        <div class="w-20">
                            <img class="h-24" style="object-fit:cover" src="${elem.image}"
                                alt="">
                        </div>
                        <div class="flex flex-col justify-between ml-4 flex-grow">
                            <span class="font-bold text-sm">${elem.name} album</span>
                            <span class="text-red-500 text-xs">${elem.genre}</span>
                            <a class="removeCart font-semibold hover:text-red-500 text-gray-500 text-xs" style="cursor:pointer">Remove</a>
                        </div>
                    </div>
                  
                </div>
    `
    let removeCart = document.querySelectorAll(".removeCart")
    for (let btn of removeCart) {
        btn.addEventListener("click", function () {
            console.log(this.parentElement.parentElement.parentElement.remove());
            --favCount
            sup.textContent = favCount
            total = total - elem.price
            totalPriceInCheckOut.textContent = `$${total}`

        })
    }
}