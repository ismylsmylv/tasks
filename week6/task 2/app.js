let body = document.querySelector("body")
let div = document.createElement("div")
let box = document.createElement("box")
let btn = document.createElement("button")
let ul = document.createElement("ul")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let h2 = document.createElement("h2")
let p = document.createElement("p")
let a1 = document.createElement("a")
let a2 = document.createElement("a")

body.appendChild(div)
div.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
li1.appendChild(a1)
li2.appendChild(a2)
body.append(h2, p, btn)

div.style.border = "1px solid black"
div.style.width = "100%"
div.style.height = "100%"
a1.style.color = "blue"
a2.style.color = "blue"
a1.innerText = "google"
a2.innerText = "youtube"
a1.href = "google.com"
a2.href = "youtube.com"
h2.innerText = "Heading Text"
h2.style.color = "red"
p.innerHTML = "Address: <em>Baku, Azerbaijan</em>"
btn.style.border = "none"
btn.style.padding = " 10px 5px"
btn.style.borderRadius = "5px"
btn.style.color = "white"
btn.innerText = "Disabled button"
btn.style.backgroundColor = "skyblue"
btn.style.marginTop = "10px"
btn.setAttribute("disabled", true)