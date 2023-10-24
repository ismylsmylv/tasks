let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let count = document.querySelector(".count")
btn1.addEventListener("click", function () {
    count.textContent--
    if (count.textContent <= "0") {
        btn1.style.backgroundColor = "red"
        btn1.setAttribute("disabled", "");
    }
})


btn2.addEventListener("click", function () {
    count.textContent++
    btn1.style.backgroundColor = "green"
    btn1.removeAttribute("disabled", "");
})

///////////////////////////////////////////////////

let input = document.querySelector(".form-control")
let error = document.querySelector(".error")
let addBtn = document.querySelector(".btn-primary")
let addedList = document.querySelector("ul")
let addedListItem = document.querySelector("li")
input.addEventListener("keyup", function () {
    if (input.value.length < 5) {
        error.style.display = "block"
        addBtn.setAttribute("disabled", "")
        addedListItem.style.display = "none"
    }
    else {
        error.style.display = "none"
        addBtn.removeAttribute("disabled", "")
        addedListItem.style.display = "block"
    }
})
//use it with append, then value 0
addBtn.addEventListener("click", function () {
    addedListItem.textContent = input.value
})


///////////////////////////////////////////////////
let nameField = document.querySelector("#nameField")
let ageField = document.querySelector("#ageField")
let imgField = document.querySelector("#imgField")
let card = document.querySelector(".card")
let cont = document.querySelector(".container")
let body=document.querySelector("body")
let fieldBtn=document.querySelector(".fieldBtn")

fieldBtn.addEventListener("submit", function (e) {
    e.preventDefault()
    cont.innerHTML += `        <div class="card col-3">
<img src="${imgField}" alt="">
<h3>${nameField}</h3>
<p>${ageField}</p>
</div>`

})