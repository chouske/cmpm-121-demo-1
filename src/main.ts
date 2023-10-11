import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Chase's game";

document.title = gameName;
const button = document.createElement("button");
const upgradebutton = document.createElement("button");
const header = document.createElement("h1");
const mydiv = document.createElement("div");
let upgraderate = 0;
header.innerHTML = gameName;
button.innerHTML = "🍭";
upgradebutton.innerHTML = "Upgrade";
upgradebutton.disabled = true;
let counter: number = 0;
mydiv.innerHTML = counter + " lollipops";
button.addEventListener("click", function () {
  counter++;
  mydiv.innerHTML = counter + " lollipops";
});
upgradebutton.addEventListener("click", function () {
  counter = counter - 10;
  upgraderate++;
});
app.append(header);
app.append(button);
app.append(mydiv);
app.append(upgradebutton);
let time = 0;
function update(current: number) {
  mydiv.innerHTML = counter + " lollipops";
  counter = counter + ((current - time) / 1000) * upgraderate; //A loop is one frame.
  time = current;
  window.requestAnimationFrame(update);
  if (counter >= 10) {
    upgradebutton.disabled = false;
  } else {
    upgradebutton.disabled = true;
  }
}
window.requestAnimationFrame(update);
