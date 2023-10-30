let body = document.querySelector("body")
let button = document.querySelector("button")
let clicked = false
let storage=

button.addEventListener("click", function () {
    clicked = JSON.parse(localStorage.getItem("Light mode"))
    if (clicked) {
        button.textContent = "Light Mode"
        button.classList.toggle("light")
        body.style.backgroundColor = "black"
        clicked = false
        storage=localStorage.setItem(JSON.stringify("Light mode"), true)
    }
    else {
        button.textContent = "Dark Mode"
        button.classList.toggle("dark")
        body.style.backgroundColor = "white"
        clicked = true
        storage=localStorage.setItem("Light mode",JSON.stringify(false) )//


    }
    console.log(storage);
})

addEventListener("load", (event) => {
    console.log();
    clicked = JSON.parse(localStorage.getItem("Light mode"))
    if (clicked) {
        button.textContent = "Light Mode"
        button.classList.toggle("light")
        body.style.backgroundColor = "black"
        clicked = false
        localStorage.setItem(JSON.stringify("Light mode"), true)
    }
    else {
        button.textContent = "Dark Mode"
        button.classList.toggle("dark")
        body.style.backgroundColor = "white"
        clicked = true
        localStorage.setItem(JSON.stringify("Light mode"), false)

    }
});

//from github
// let button = document.querySelector(".mode-btn");

button.addEventListener("click", function () {
  //for the first time, when local storage hasn't declared
  if (JSON.parse(localStorage.getItem("dark-mode")) === null) {
    localStorage.setItem("dark-mode", JSON.stringify(true));
    this.textContent = "Light Mode";
    this.classList.replace("btn-dark", "btn-light");
    document.body.classList.add("bg-dark");
  } 
  else {
    if (JSON.parse(localStorage.getItem("dark-mode")) === true) {
      this.textContent = "Dark Mode";
      this.classList.replace("btn-light", "btn-dark");
      document.body.classList.remove("bg-dark");
      localStorage.setItem('dark-mode',JSON.stringify(false));
    } else {
      this.textContent = "Light Mode";
      this.classList.replace("btn-dark", "btn-light");
      document.body.classList.add("bg-dark");
      localStorage.setItem('dark-mode',JSON.stringify(true));
    }
  }
});


document.addEventListener('DOMContentLoaded',()=>{
    if (JSON.parse(localStorage.getItem('dark-mode'))) {
        if (JSON.parse(localStorage.getItem('dark-mode'))===true) {
            button.classList.replace('btn-dark','btn-light');
            document.body.classList.add('bg-dark');
            button.textContent = 'Light Mode';
        }
        else{
            button.classList.replace('btn-light','btn-dark');
            document.body.classList.remove('bg-dark');
            button.textContent = 'Dark Mode';
        }
    }
})

