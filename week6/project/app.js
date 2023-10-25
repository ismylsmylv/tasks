body = document.querySelector("body")
wrapper = document.querySelector(".wrapper")
addInput = document.querySelector(".addInput")
plusBtn = document.querySelector(".plusBtn")
error = document.querySelector(".error")
completeBtn = document.querySelector(".completeBtn")
deleteBtn = document.querySelector(".deleteBtn")
sumtext = document.querySelector(".sumtext")
clearAll = document.querySelector(".clearAll")
taskList = document.querySelector(".taskList")
taskText = document.querySelector(".taskText")
testtask = document.querySelector(".testtask")
task = document.querySelector(".task")
let count = 0
sumtext.textContent = `No ToDo`
testtask.style.display = "none"


//adding task
plusBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (addInput.value) {
        taskList.innerHTML += ` <div class="task">
    <p class="taskText">${addInput.value}</p>
    <button class="completeBtn"><i class="fa-solid fa-check"></i></button>
    <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
</div>`
        count++
        sumtext.textContent = `You have ${count} pending tasks`
        addInput.value = ""
    }
    else {
        error.style.display = "block"

    }
})

//task edit
deleteBtn.addEventListener("click", function (e) {
    e.preventDefault()
    taskList.innerHTML = ``
    count--
    sumtext.textContent = `You have ${count} pending tasks`
})


//taskList.forEach((task) => {
completeBtn.addEventListener("click", function (e) {
    e.preventDefault()
    taskText.style.textDecoration = "line-through"
})





//clear all
clearAll.addEventListener("click", function (e) {
    e.preventDefault()
    if (count > 0) {
        if (confirm("clear all tasks?")) {
            taskList.innerHTML = ``
            count--
            sumtext.textContent = `No ToDo`
            error.style.display = "none"
        }
    }
    else {
        alert("task is empty")
    }
})