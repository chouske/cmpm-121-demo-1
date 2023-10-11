import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Chase's game";

document.title = gameName;
interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "Lollipop stand🍭", cost: 10, rate: 0.1 },
  { name: "Lollipop shop🍭", cost: 100, rate: 2 },
  { name: "Lollipop factory🍭", cost: 1000, rate: 50 },
];
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
button.innerHTML = "Make a lollipop🍭";
upgradebutton.innerHTML = "Lollipop stand🍭 cost: " + availableItems[0].cost;
upgradebutton2.innerHTML = "Lollipop shop🍭 cost: " + availableItems[1].cost;
upgradebutton3.innerHTML = "Lollipop factory🍭 cost:" + availableItems[2].cost;
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
  counter = counter - availableItems[0].cost;
  upgraderate = upgraderate + availableItems[0].rate;
  acounter++;
  availableItems[0].cost = availableItems[0].cost * 1.15;
  upgradebutton.innerHTML = "Lollipop stand🍭 cost: " + availableItems[0].cost;
});
upgradebutton2.addEventListener("click", function () {
  counter = counter - availableItems[1].cost;
  upgraderate = upgraderate + availableItems[1].rate;
  bcounter++;
  availableItems[1].cost = availableItems[1].cost * 1.15;
  upgradebutton2.innerHTML = "Lollipop shop🍭 cost: " + availableItems[1].cost;
});
upgradebutton3.addEventListener("click", function () {
  counter = counter - availableItems[2].cost;
  upgraderate = upgraderate + availableItems[2].rate;
  ccounter++;
  availableItems[2].cost = availableItems[2].cost * 1.15;
  upgradebutton3.innerHTML =
    "Lollipop factory🍭 cost:" + availableItems[2].cost;
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
  if (counter >= availableItems[0].cost) {
    upgradebutton.disabled = false;
  } else {
    upgradebutton.disabled = true;
  }
  if (counter >= availableItems[1].cost) {
    upgradebutton2.disabled = false;
  } else {
    upgradebutton2.disabled = true;
  }
  if (counter >= availableItems[2].cost) {
    upgradebutton3.disabled = false;
  } else {
    upgradebutton3.disabled = true;
  }
}
window.requestAnimationFrame(update);
