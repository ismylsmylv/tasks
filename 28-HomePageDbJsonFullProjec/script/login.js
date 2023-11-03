let logName = document.querySelector("#text")
let logPassword = document.querySelector("#password")
let logBtn = document.querySelector("#logBtn")
let url = "http://localhost:3000/users"
let isLogged = false

logBtn.addEventListener("click", function (e) {
    e.preventDefault()
    fetch(url).then(res => res.json()).then(data => {
        // console.log(data);
        data.forEach(element => {
            if (element.username == logName.value && element.password == logPassword.value) {
                console.log("success")
                isLogged = true
                localStorage.setItem("login", JSON.stringify(isLogged))
                window.location.href = "./index.html"
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrect email or password',
                    text: 'Please enter correct credentials to sign in',
                })
            }
        });
    })
})