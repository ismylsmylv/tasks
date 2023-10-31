let url = "http://localhost:3000/singers/"

let tbody=document.querySelector("tbody")
fetch(url).then(res => res.json()).then(data => {
    data.forEach((elem, i) => {
        tbody.innerHTML+=`
        <tr>
        <th scope="row">${elem.id}</th>
        <td>${elem.name}</td>
        <td><img src="${elem.image}"
                alt=""></td>
        <td>${elem.age}</td>
        <td>${elem.genre}</td>
        <td><a href="#" name="${elem.id}" class="btn btn-danger favorite"><i class="fa-solid fa-trash"></i></a></td>
    </tr>`
    })
})