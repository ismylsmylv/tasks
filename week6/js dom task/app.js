//div, button inside with height and width and bg
let body = document.querySelector("body")
let box = document.querySelector(".box")

let div = document.createElement("div")
div.style.backgroundColor = "red"
div.style.width = "100px"
div.style.height = "100px"
div.className = "greenBtn"
body.appendChild(div)

//input and button
let input = document.createElement("input")
let btn = document.createElement("button")
let btn2 = document.createElement("button")
body.appendChild(input)
body.appendChild(btn)
body.appendChild(btn2)
btn.innerText = "text"
btn2.innerText = "text2"
btn.addEventListener("click", function () {
    console.log(input.value);
})
btn2.addEventListener("click", function () {
    console.log(div.classList)
    console.log(box.classList)

    div.classList.toggle("green")
    box.classList.toggle("green")


})