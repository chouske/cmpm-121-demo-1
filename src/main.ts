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
  { name: "Lollipop town🍭", cost: 10000, rate: 1000 },
  { name: "Lollipop city🍭", cost: 100000, rate: 20000 },
];
const button = document.createElement("button");
const upgradebutton = document.createElement("button");
const upgradebutton2 = document.createElement("button");
const upgradebutton3 = document.createElement("button");
const upgradebutton4 = document.createElement("button");
const upgradebutton5 = document.createElement("button");
const header = document.createElement("h1");
const mydiv = document.createElement("div");
const displayedrate = document.createElement("div");
const upgradecount = document.createElement("div");
let upgraderate = 0;
header.innerHTML = gameName;
button.innerHTML = "Make a lollipop🍭";
upgradebutton.innerHTML =
  availableItems[0].name + "cost: " + availableItems[0].cost;
upgradebutton2.innerHTML =
  availableItems[1].name + "cost: " + availableItems[1].cost;
upgradebutton3.innerHTML =
  availableItems[2].name + "cost: " + availableItems[2].cost;
upgradebutton4.innerHTML =
  availableItems[3].name + "cost: " + availableItems[3].cost;
upgradebutton5.innerHTML =
  availableItems[4].name + "cost: " + availableItems[4].cost;
upgradebutton.disabled = true;
upgradebutton2.disabled = true;
upgradebutton3.disabled = true;
upgradebutton4.disabled = true;
upgradebutton5.disabled = true;
let acounter: number = 0,
  bcounter: number = 0,
  ccounter: number = 0,
  dcounter: number = 0,
  ecounter: number = 0;
let counter: number = 10000;

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
  upgradebutton.innerHTML =
    availableItems[0].name + "cost: " + availableItems[0].cost;
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
    availableItems[2].name + "cost: " + availableItems[2].cost;
});
upgradebutton4.addEventListener("click", function () {
  counter = counter - availableItems[3].cost;
  upgraderate = upgraderate + availableItems[3].rate;
  dcounter++;
  availableItems[3].cost = availableItems[3].cost * 1.15;
  upgradebutton4.innerHTML =
    availableItems[3].name + "cost: " + availableItems[3].cost;
});
upgradebutton5.addEventListener("click", function () {
  counter = counter - availableItems[4].cost;
  upgraderate = upgraderate + availableItems[4].rate;
  ecounter++;
  availableItems[4].cost = availableItems[4].cost * 1.15;
  upgradebutton5.innerHTML =
    availableItems[4].name + "cost: " + availableItems[4].cost;
});
app.append(header);
app.append(button);
app.append(mydiv);
app.append(upgradebutton);
app.append(upgradebutton2);
app.append(upgradebutton3);
app.append(upgradebutton4);
app.append(upgradebutton5);
app.append(displayedrate);
app.append(upgradecount);
let time = 0;
function update(current: number) {
  mydiv.innerHTML = counter + " lollipops";
  displayedrate.innerHTML = upgraderate + " lollipops/sec";
  upgradecount.innerHTML =
    "You have purchased " +
    acounter +
    " " +
    availableItems[0].name +
    " upgrades, " +
    bcounter +
    " " +
    availableItems[1].name +
    " upgrades, " +
    ccounter +
    " " +
    availableItems[2].name +
    " upgrades, " +
    dcounter +
    " " +
    availableItems[3].name +
    "upgrades, and " +
    ecounter +
    " " +
    availableItems[4].name +
    " upgrades";
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
  if (counter >= availableItems[3].cost) {
    upgradebutton4.disabled = false;
  } else {
    upgradebutton4.disabled = true;
  }
  if (counter >= availableItems[4].cost) {
    upgradebutton5.disabled = false;
  } else {
    upgradebutton5.disabled = true;
  }
}
window.requestAnimationFrame(update);
