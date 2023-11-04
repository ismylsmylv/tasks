let url = "http://localhost:3000/singers/";
let bigCard = document.querySelector(".bigCard");

// console.log(window.location.href);

let id = new URLSearchParams(window.location.search).get("id");
console.log(id);

fetch(`${url}${id}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        bigCard.innerHTML += `
        <div class="image"><img src="${data.image}" alt=""></div>
        <div class="bigCardFooter">
          <h1 class="title">${data.name}</h1>
          <p class="nation">${data.name} is ${data.nation}</p>
          <p class="age">Age: ${data.age}</p>
          <p class="genre">Genre: ${data.genre}</p>
          <a href="./index.html" class="btn btn-outline-primary">Home</a>
      </div>`;
    });

    let isLogged=JSON.parse(localStorage.getItem("loginId"))
console.log(isLogged);
let profile=document.querySelector("#profile")
let logOut=document.querySelector("#logOut")
let login=document.querySelector("#login")
let signup=document.querySelector("#signup")
if(isLogged){
  login.style.display="none"
  signup.style.display="none"
}
else{
  profile.style.display="none"
  logOut.style.display="none"
}
logOut.addEventListener("click", function(e){
  e.preventDefault()
  localStorage.removeItem("loginId")
  window.location.href='./index.html'
})