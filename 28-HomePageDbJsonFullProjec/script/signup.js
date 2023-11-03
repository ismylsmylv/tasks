let signEmail = document.querySelector("#email")
let signName = document.querySelector("#text")
let signPassword = document.querySelector("#password")
let signBalance = document.querySelector("#number")
let signBtn = document.querySelector("#signBtn")
let orders
let url = "http://localhost:3000/users"

signBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (signName.value == false || signPassword.value == false || signEmail.value == false || signBalance.value == false) {
        Swal.fire({
            icon: 'error',
            title: 'Provide details',
            text: 'Pleace fill all required fields',
        })

    }
    else {
        fetch(url,
            {
                method: "Post",
                body: JSON.stringify({
                    "username": signName.value,
                    "password": signPassword.value,
                    "email": signEmail.value,
                    "balance": signBalance.value,
                    "orders": orders
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Signed up succesfully',
        // })
        window.location.href='./login.html'
    }

}
).then(res => res.json()).then(data => {

})
