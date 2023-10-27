let row = document.querySelector(".row")
let url = "https://northwind.vercel.app/api/suppliers/"
fetch(url).then(res => res.json()).then((data) => {
    data.forEach((element, i) => {
        row.innerHTML += `
    <div class="card col-3">
        <div class="image"><img src="https://picsum.photos/200/200" alt=""></div>
        <div class="details">
            <div class="companyName">${element.companyName}</div>
            <div class="contactName">${element.contactName}</div>
            <div class="phone">${element.address?.phone}</div>
            <div class="country">${element.address?.country}</div>
            <button type="button" class="btn btn-primary infoBtn" name="${i}" >Info</button>
            <button type="button" class="btn btn-danger deleteBtn" name="${element.id}">Delete</button>
        </div>`

    })

    //info button
    let infoBtns = document.querySelectorAll(".infoBtn")
    for (let btn of infoBtns) {
        btn.addEventListener("click", function () {
            Swal.fire({
                title: `${data[btn.name].companyName}`,
                text: `${data[btn.name].address?.city}, ${data[btn.name].address?.city} street, ${data[btn.name].address?.country}`,
            })
        })

    }

    //delete button
    let deleteBtns = document.querySelectorAll(".deleteBtn")
    for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
            console.log(this.name);
            this.parentElement.parentElement.remove()
            fetch(url + this.name, {
                method: "Delete",
            })
            // console.log(this.parentElement.id);
        })

    }

})
let postApi = document.querySelector(".postApi")
let datas = {
    "companyName": "Ceres",
    "contactName": "ismylsmylv",
    "contactTitle": "",
    "address": {
        "street": "148 rue Chasseur",
        "city": "Ste-Hyacinthe",
    }
}
postApi.addEventListener("click", function (e) {
    e.preventDefault()
    fetch(url, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datas),
    })

})