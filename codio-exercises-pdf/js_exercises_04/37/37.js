document.querySelector("li.start-here").textContent = "main title";

const ul = document.getElementById("second");
const li = document.createElement("li");
li.textContent = "sub title 4";
ul.appendChild(li);

const lastremove = document.querySelector("ul li:last-child");
lastremove.remove();

document.title = "Master Of The Dom";

document.querySelector("p").textContent = "i love programming";
