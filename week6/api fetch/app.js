let body = document.querySelector("body")
let table = document.querySelector(".table")
let tbody = document.querySelector("tbody")
let getData = document.querySelector(".getData")
let sortUserName = document.querySelector(".sortUserName")
let sortUserId = document.querySelector(".sortUserId")
let clear = document.querySelector(".clear")

getData.addEventListener("click", function (e) {
    e.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
        // console.log(data);
        data.forEach(element => tbody.innerHTML = ``)
        data.forEach(element => tbody.innerHTML += `            <tr>
    <th scope="row">${element.id}</th>
    <td>${element.name}</td>
    <td>${element.username}</td>
    <td>${element.email}</td>
    <td>${element.address.city}</td>
    <td><a href="${element.website}">${element.website}</a></td>
    <td><button type="button" class="btn btn-light">Learn More</button></td>
</tr>
    `)
    })
})


clear.addEventListener("click", function (e) {
    e.preventDefault()
    tbody.innerHTML = ``
})

sortUserId.addEventListener("click", function (e) {
    e.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
        // console.log(data);
        data.forEach(element => tbody.innerHTML = ``)
        data.reverse()
        data.forEach(element => tbody.innerHTML += `            <tr>
    <th scope="row">${element.id}</th>
    <td>${element.name}</td>
    <td>${element.username}</td>
    <td>${element.email}</td>
    <td>${element.address.city}</td>
    <td><a href="${element.website}">${element.website}</a></td>
    <td><button type="button" class="btn btn-light">Learn More</button></td>
</tr>
    `)
    })
})

sortUserName.addEventListener("click", function (e) {
    e.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
        // console.log(data);
        data.forEach(element => tbody.innerHTML = ``)
        data.forEach(element =>
            data.sort(function (a, b) {
                if (a.username < b.username) { return -1}
                if (a.username > b.username) {
                    tbody.innerHTML += `            <tr>
    <th scope="row">${a.id}</th>
    <td>${a.name}</td>
    <td>${a.username}</td>
    <td>${a.email}</td>
    <td>${a.address.city}</td>
    <td><a href="${a.website}">${a.website}</a></td>
    <td><button type="button" class="btn btn-light">Learn More</button></td>
</tr>
    `
     return 1}
            }),
        )
    })
})

