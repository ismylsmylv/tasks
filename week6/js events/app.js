let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let btn = document.querySelector("button")
let body = document.querySelector("body")
let input3 = document.querySelector(".input3")
let input4 = document.querySelector(".input4")
let input5 = document.querySelector(".input5")
let div = document.querySelector(".ismayil")
let arr = []
let obj = {}
btn.addEventListener("click", function (e) {
    console.log(input1.value);
    console.log(input2.value);
    obj.name = input1.value
    obj.surname = input2.value
    arr.push(obj)
    console.log(arr);
    //body.style.backgroundColor=input3.value
    // div.style.width = input4.value+"px"
    // div.style.height = input5.value+"px"
    div.style.width = input4.value+"px"
    div.style.height = input5.value+"px"
    div.style.backgroundColor = "red"
    div.style.border = "2px solid black"
    e.preventDefault()

})