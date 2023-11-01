let form = document.querySelector("form")
let regUser = document.querySelector(".regUser")
let regPass = document.querySelector(".regPass")
let regBtn = document.querySelector(".regBtn")
let regEmail = document.querySelector(".regEmail")
let url = "http://localhost:3000/users"
let isLogged

regBtn.addEventListener("click", function (e) {
    e.preventDefault()
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "username": regUser.value,
            "email": regEmail.value,
            "password": regPass.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(console.log("success"))

})
