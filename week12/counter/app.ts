console.log("object");
let body = document.querySelector("body");
// let increase = document.querySelector(".increase")!;
// let decrease = document.querySelector(".decrease")!;
// let count = <HTMLElement>document.querySelector(".count")!;
let initialCount: number = 0;

const increase = document.body.appendChild(document.createElement("button"));
increase.classList.add("increase");
increase.innerHTML = `+`;

const count = document.body.appendChild(document.createElement("div"));
count.classList.add("count");
count.innerHTML = `0`;

const decrease = document.body.appendChild(document.createElement("button"));
decrease.classList.add("decrease");
decrease.innerHTML = `-`;

increase.addEventListener("click", function (): void {
  console.log(initialCount);
  ++initialCount;
  count.textContent = String(initialCount);
});

decrease.addEventListener("click", function (): void {
  console.log(initialCount);
  --initialCount;
  count.textContent = String(initialCount);
});
