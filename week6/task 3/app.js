let button = document.querySelector("button")
let box = document.querySelector(".box")
let h2 = document.querySelector("h2")
h2.textContent = "Small"
button.addEventListener("click", function () {
    box.classList.toggle("box2")

})
button.addEventListener("click", function () {
    if (h2.textContent == "Small") {
        h2.textContent = "Big"
    }
    else {
        h2.textContent = "Small"
    }
})
h2.textContent=document.getElementById('input').value()

