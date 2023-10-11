import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Chase's game";

document.title = gameName;
const button = document.createElement("button");
const header = document.createElement("h1");
const mydiv = document.createElement("div");
header.innerHTML = gameName;
button.innerHTML = "🍭";
let counter: number = 0;
mydiv.innerHTML = counter + " lollipops";
button.addEventListener("click", function () {
  counter++;
  mydiv.innerHTML = counter + " lollipops";
});
app.append(header);
app.append(button);
app.append(mydiv);
