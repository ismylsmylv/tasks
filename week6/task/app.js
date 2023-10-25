let body = document.querySelector("body")
let form = document.querySelector("form")
let inputName = document.querySelector(".inputName")
let inputAge = document.querySelector(".inputAge")
let inputSurname = document.querySelector(".inputSurname")
let genders = document.querySelector(".genders")
let inputGenderWoman = document.querySelector(".inputGenderWoman")
let inputGenderMan = document.querySelector(".inputGenderMan")
let hobbies = document.querySelectorAll(".checkbox")
let places = document.querySelector(".places")
let option = document.querySelectorAll(".option")
let formBtn = document.querySelector(".formBtn")
let image = document.querySelector(".image")
let studentsBtn = document.querySelector(".studentsBtn")
let row = document.querySelector(".row")
let container = document.querySelector(".container")
let students = []
let gender
let hobby = []

form.addEventListener("submit", function (e) {

    //gender
    e.preventDefault()
    if (!inputGenderWoman.checked) {
        gender = "Male"
    }
    else {
        gender = "Female"
    }

    //hobbies
    for (elem of hobbies) {
        if (elem.checked) {
            hobby.push(elem.id)
        }
    }

    //object
    let studentObj = {
        name: inputName.value,
        surname: inputSurname.value,
        age: inputAge.value,
        gender: gender,
        hobbies: hobby,
        location: places.value,
    }


    students.push(studentObj)
    console.log(students);


})

studentsBtn.addEventListener("click", function (e) {
    e.preventDefault()
    row.innerHTML += `<div class="card col-4">
    <div class="cardImg"><img src="" alt=""></div>
    <h3>${inputName.value}</h3>
    <p>${inputAge.value}</p>

</div>`
})