import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Chase's game";

document.title = gameName;
const button = document.createElement("button");
const upgradebutton = document.createElement("button");
const upgradebutton2 = document.createElement("button");
const upgradebutton3 = document.createElement("button");
const header = document.createElement("h1");
const mydiv = document.createElement("div");
const displayedrate = document.createElement("div");
const upgradecount = document.createElement("div");
let upgraderate = 0;
header.innerHTML = gameName;
button.innerHTML = "🍭";
let acost: number = 10,
  bcost: number = 100,
  ccost: number = 1000;
upgradebutton.innerHTML = "Upgrade A, cost: " + acost;
upgradebutton2.innerHTML = "Upgrade B, cost: " + bcost;
upgradebutton3.innerHTML = "Upgrade C, cost:" + ccost;
upgradebutton.disabled = true;
upgradebutton2.disabled = true;
upgradebutton3.disabled = true;
let acounter: number = 0,
  bcounter: number = 0,
  ccounter: number = 0;
let counter: number = 0;

mydiv.innerHTML = counter + " lollipops";
displayedrate.innerHTML = upgraderate + " lollipops/sec";
button.addEventListener("click", function () {
  counter++;
});
upgradebutton.addEventListener("click", function () {
  counter = counter - acost;
  upgraderate = upgraderate + 0.1;
  acounter++;
  acost = acost * 1.15;
  upgradebutton.innerHTML = "Upgrade A, cost: " + acost;
});
upgradebutton2.addEventListener("click", function () {
  counter = counter - bcost;
  upgraderate = upgraderate + 2;
  bcounter++;
  bcost = bcost * 1.15;
  upgradebutton2.innerHTML = "Upgrade B, cost: " + bcost;
});
upgradebutton3.addEventListener("click", function () {
  counter = counter - ccost;
  upgraderate = upgraderate + 50;
  ccounter++;
  ccost = ccost * 1.15;
  upgradebutton3.innerHTML = "Upgrade C, cost:" + ccost;
});
app.append(header);
app.append(button);
app.append(mydiv);
app.append(upgradebutton);
app.append(upgradebutton2);
app.append(upgradebutton3);
app.append(displayedrate);
app.append(upgradecount);
let time = 0;
function update(current: number) {
  mydiv.innerHTML = counter + " lollipops";
  displayedrate.innerHTML = upgraderate + " lollipops/sec";
  upgradecount.innerHTML =
    "You have purchased " +
    acounter +
    " A upgrades, " +
    bcounter +
    " B upgrades, and " +
    ccounter +
    " C upgrades";
  counter = counter + ((current - time) / 1000) * upgraderate; //A loop is one frame.
  time = current;
  window.requestAnimationFrame(update);
  if (counter >= acost) {
    upgradebutton.disabled = false;
  } else {
    upgradebutton.disabled = true;
  }
  if (counter >= bcost) {
    upgradebutton2.disabled = false;
  } else {
    upgradebutton2.disabled = true;
  }
  if (counter >= ccost) {
    upgradebutton3.disabled = false;
  } else {
    upgradebutton3.disabled = true;
  }
}
window.requestAnimationFrame(update);
