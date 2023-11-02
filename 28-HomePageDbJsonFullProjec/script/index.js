let url = "http://localhost:3000/singers/";
let results = document.querySelector(".results");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem, i) => {
      elem.count = 1
      results.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img name="${elem.id}" src="${elem.image}" class="card-img-top" alt="singer">
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">${elem.name} is <b>${elem.nation}</b></p>
            <a href="details.html?id=${elem.id}" class="btn btn-outline-primary details">Details</a>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger favorite"><i class="fa-regular fa-heart"></i></button>
            <button href="#" name="${elem.id}" class="btn btn-outline-warning cart"><i class="fa-solid fa-cart-shopping"></i></i></button>
          </div>
        </div>`;
    });

    let detailBtn = document.querySelectorAll(".details");
    detailBtn.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(e.target);
        let elemId = e.target.getAttribute("name");
        window.open(`details.html?id=${elemId}`, "_blank");
      });
    });

    //favorites
    let favItemsArr = []
    let favItems = JSON.parse(localStorage.getItem("favorite"))
    if (favItems) {
      favItemsArr = [...favItems];
    }
    let favorites = document.querySelectorAll(".favorite")
    favorites.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault()
        console.log(btn.name);
        icon = this.querySelector("i")
        if (icon.classList.contains("fa-solid")) {
          icon.classList.add("fa-regular")
          icon.classList.remove("fa-solid")
          favItemsArr = favItemsArr.filter(elem => elem.id != this.getAttribute("name"))
          localStorage.setItem("favorites", JSON.stringify(favItemsArr))
          console.log(favItemsArr);
        }
        else {
          console.log(this.classList);
          icon.classList.add("fa-solid")
          icon.classList.remove("fa-regular")
          favItemsArr.push(data[+this.getAttribute("name") - 1]);
          localStorage.setItem("favorites", JSON.stringify(favItemsArr))
          console.log(favItemsArr);
        }
      })
    })





    //cart
    let cart = document.querySelectorAll(".cart")
    let cartItemsArr = []
    let cartItems = JSON.parse(localStorage.getItem("cart"))

    //  localStorage.setItem("cart", JSON.stringify(cartItemsArr))
    console.log(cartItems);
    if (cartItems) {
      cartItemsArr = [...cartItems]
    }
    for (let btn of cart) {
      btn.addEventListener("click", function (e) {
        console.log(this.name);
        // icon = this.querySelector("i")

        if (cartItemsArr.find((elem) => elem.id == this.name)
        ) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added to cart',
            showConfirmButton: false,
            timer: 1500
          })
          cartItemsArr.find((elem) => elem.id == this.name).count++




          // cartItemsArr = cartItemsArr.filter(elem => elem.id != this.getAttribute("name"))
          localStorage.setItem("cart", JSON.stringify(cartItemsArr))
          console.log(cartItemsArr);
        }
        else {
          console.log(this.classList);
          cartItemsArr.push(data.find(elem => elem.id == this.name));
          localStorage.setItem("cart", JSON.stringify(cartItemsArr))
          console.log(cartItemsArr);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Removed from cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }


// let sup = document.querySelector("sup")
// let cartCount=[]
// cartCount = JSON.parse(localStorage.getItem("cart"))
// // sup.textContent=cartCount.length()
// console.log(cartCount.length());
  });


