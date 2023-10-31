let url = "http://localhost:3000/singers/"
let results = document.querySelector(".results")


fetch(url).then(res => res.json()).then(data => {
    data.forEach((elem, i) => {
        results.innerHTML += ` <div class="card" style="width: 18rem;">
        <img  name="${elem.id}" src="${elem.image}"
            class="card-img-top" alt="singer">
        <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">${elem.name} is <b>${elem.nation}</b></p>
            <a href="#" name="${i}" class="btn btn-primary details">Details</a>
            <a href="#" name="${i}" class="btn btn-danger delete"><i class="fa-solid fa-trash"></i></a>
            <a href="#" name="${i}" class="btn btn-danger favorite"><i class="fa-regular fa-heart"></i></a>
        </div>
    </div>
        `})
    // let detailBtns = document.querySelectorAll(".details")
    // let deleteBtns = document.querySelectorAll(".delete")
    // let favoriteBtns = document.querySelectorAll(".favorite")

    // for (btn of detailBtns) {
    //     btn.addEventListener("click", function () {
    //         Swal.fire({
    //             title: `${data[btn.name].name}`,
    //             text: `${data[btn.name].name} is a ${data[btn.name].nation} singer at age of ${data[btn.name].age}`,
    //             imageUrl: `${data[btn.name].image}`,
    //             imageWidth: 400,
    //             imageHeight: 200,
    //             imageAlt: 'Custom image',
    //         })
    //     })
    // }

    let detailBtns = document.querySelectorAll(".details")
    let deleteBtns = document.querySelectorAll(".delete")
    let favoriteBtns = document.querySelectorAll(".favorite")

    detailBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            Swal.fire({
                title: `${data[btn.name].name}`,
                text: `${data[btn.name].name} is a ${data[btn.name].nation} singer at age of ${data[btn.name].age}`,
                imageUrl: `${data[btn.name].image}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        })
    })

    deleteBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            // console.log(btn.parentElement.parentElement);
            btn.parentElement.parentElement.remove()
            fetch(url + `${btn.name}`, {
                method: "Delete",
            }).then((res) => res.json()).then((data) => { })
            console.log(url + `${btn.name}`);
        })
    })



})
