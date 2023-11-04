let signEmail = document.querySelector("#email");
let signName = document.querySelector("#text");
let signPassword = document.querySelector("#password");
let signBalance = document.querySelector("#number");
let signBtn = document.querySelector("#signBtn");
let orders;
let url = "http://localhost:3000/users";

signBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // empty
    if (!signName.value || !signPassword.value || !signEmail.value || signBalance.value < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Provide details',
            text: 'Please fill all required fields',
        });
    } 
    // length
    else if (signName.value.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Username',
            text: 'Username must be at least 3 characters long',
        });
    } 
    // balance
    else if (signBalance.value < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Balance',
            text: 'Balance cannot be less than 0',
        });
    } 
    // uppercase
    else if (!/[A-Z]/.test(signPassword.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Password',
            text: 'Password must contain at least one uppercase letter',
        });
    } 
    //  username 
    else {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.some(user => user.username === signName.value)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Username taken',
                        text: 'Please choose another username',
                    });
                } else {
                    return fetch(url, {
                        method: "POST",
                        body: JSON.stringify({
                            "username": signName.value,
                            "password": signPassword.value,
                            "email": signEmail.value,
                            "balance": signBalance.value,
                            "orders": [] 
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    });
                }
            }).then(response => {
                if (response.ok) {
                    // Registration successful, redirect to login page
                    window.location.href = './login.html';
                } else {
                    // handle registration failure
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration failed',
                        text: 'Please try again later',
                    });
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration error',
                    text: 'Please try again later',
                })});
            ;
    }
});
