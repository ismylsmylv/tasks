console.log("object");
var body = document.querySelector("body");
// let increase = document.querySelector(".increase")!;
// let decrease = document.querySelector(".decrease")!;
// let count = <HTMLElement>document.querySelector(".count")!;
var initialCount = 0;
var increase = document.body.appendChild(document.createElement("button"));
increase.classList.add("increase");
increase.innerHTML = "+";
var count = document.body.appendChild(document.createElement("div"));
count.classList.add("count");
count.innerHTML = "0";
var decrease = document.body.appendChild(document.createElement("button"));
decrease.classList.add("decrease");
decrease.innerHTML = "-";
increase.addEventListener("click", function () {
    console.log(initialCount);
    ++initialCount;
    count.textContent = String(initialCount);
});
decrease.addEventListener("click", function () {
    console.log(initialCount);
    --initialCount;
    count.textContent = String(initialCount);
});
