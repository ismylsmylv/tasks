let url = "http://localhost:3000/meals/";
let results = document.querySelector(".results");

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((elem, i) => {
            elem.count = 1
            let cartMeals = JSON.parse(localStorage.getItem("cartMeals"));
            if(cartMeals){
            let sup = document.querySelector("sup")
            if (data) {
                sup.textContent = cartMeals.length;
            }
            }
            

            results.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img name="${elem.id}" src="${elem.image}" class="card-img-top" alt="singer">
          <div class="card-body">
            <h5 class="card-title">${elem.name}</h5>
            <p class="card-text">${elem.ingredients}</p>
            
            <button href="#" name="${elem.id}" class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button>
            <button href="#" name="${elem.id}" class="btn btn-outline-danger favorite"><i class="fa-regular fa-heart"></i></button>
            <button href="#" name="${elem.id}" class="btn btn-outline-warning cart"><i class="fa-solid fa-cart-shopping"></i></i></button>
          </div>
        </div>`;
        });
        //<a href="details.html?id=${elem.id}" class="btn btn-outline-primary details">Details</a>
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
        let favItemsArrMeal = []
        let favItemsMeal = JSON.parse(localStorage.getItem("favMeals"))
        if (favItemsMeal) {
            favItemsArrMeal = [...favItemsMeal];
        }
        let favoriteMeals = document.querySelectorAll(".favorite")
        favoriteMeals.forEach((btn) => {
            btn.addEventListener("click", function (e) {
                e.preventDefault()
                console.log(btn.name);
                icon = this.querySelector("i")
                if (icon.classList.contains("fa-solid")) {
                    icon.classList.add("fa-regular")
                    icon.classList.remove("fa-solid")
                    favItemsArrMeal = favItemsArrMeal.filter(elem => elem.id != this.getAttribute("name"))
                    localStorage.setItem("favMeals", JSON.stringify(favItemsArrMeal))
                    console.log(favItemsArrMeal);
                    let cartMeals = JSON.parse(localStorage.getItem("cartMeals"));
                    let sup = document.querySelector("sup")
                    if (data) {
                        sup.textContent = cartMeals.length;
                    }
                }
                else {
                    // console.log(this.classList);
                    icon.classList.add("fa-solid")
                    icon.classList.remove("fa-regular")
                    favItemsArrMeal.push(data[+this.getAttribute("name") - 1]);
                    localStorage.setItem("favMeals", JSON.stringify(favItemsArrMeal))
                    console.log(favItemsArrMeal);
                    let cartMeals = JSON.parse(localStorage.getItem("cartMeals"));
                    let sup = document.querySelector("sup")
                    if (data) {
                        sup.textContent = cartMeals.length;
                    }
                }
            })
        })

        
        //cart
        let cart = document.querySelectorAll(".cart")
        let cartItemsMealArr = []
        let cartItemsMeal = JSON.parse(localStorage.getItem("cartMeals"))

        //  localStorage.setItem("cart", JSON.stringify(cartItemsMealArr))
        // console.log(cartItemsMeal);
        if (cartItemsMeal) {
            cartItemsMealArr = [...cartItemsMeal]
        }
        for (let btn of cart) {
            btn.addEventListener("click", function (e) {
                console.log(this.name);
                if (cartItemsMealArr.find((elem) => elem.id == this.name)
                ) {
                    cartItemsMealArr.find((elem) => elem.id == this.name).count++
                    localStorage.setItem("cartMeals", JSON.stringify(cartItemsMealArr))
                    console.log(cartItemsMealArr);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added again to cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    let sup = document.querySelector("sup")
                    let cartMeals = JSON.parse(localStorage.getItem("cartMeals"));
                        sup.textContent = cartMeals.length;
                    
                }
                else {
                    console.log(this.classList);
                    cartItemsMealArr.push(data.find(elem => elem.id == this.name));
                    localStorage.setItem("cartMeals", JSON.stringify(cartItemsMealArr))
                    console.log(cartItemsMealArr);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added to cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    let sup = document.querySelector("sup")
                    let cartMeals = JSON.parse(localStorage.getItem("cartMeals"));
                        sup.textContent = cartMeals.length;
                    
                }
            })
        }


        // let sup = document.querySelector("sup")
        // let cartCount=[]
        // cartCount = JSON.parse(localStorage.getItem("cart"))
        // // sup.textContent=cartCount.length()
        // console.log(cartCount.length());
    });


