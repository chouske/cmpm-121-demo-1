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
/*const upgradebutton = document.createElement("button");
const upgradebutton2 = document.createElement("button");
const upgradebutton3 = document.createElement("button");
const upgradebutton4 = document.createElement("button");
const upgradebutton5 = document.createElement("button");*/
//const buttons = [upgradebutton, upgradebutton2, upgradebutton3, upgradebutton4, upgradebutton5];
const buttons: HTMLButtonElement[] = [];
const counters: number[] = [];
for (let i = 0; i < availableItems.length; i++) {
  counters[i] = 0;
  const tempbutton = document.createElement("button");
  buttons[i] = tempbutton;
  buttons[i].innerHTML =
    availableItems[i].name + "cost: " + availableItems[i].cost;
}
const header = document.createElement("h1");
const mydiv = document.createElement("div");
const displayedrate = document.createElement("div");
const upgradecount = document.createElement("div");
let upgraderate = 0;
header.innerHTML = gameName;
button.innerHTML = "Make a lollipop🍭";
/*upgradebutton.innerHTML =
  availableItems[0].name + "cost: " + availableItems[0].cost;
upgradebutton2.innerHTML =
  availableItems[1].name + "cost: " + availableItems[1].cost;
upgradebutton3.innerHTML =
  availableItems[2].name + "cost: " + availableItems[2].cost;
upgradebutton4.innerHTML =
  availableItems[3].name + "cost: " + availableItems[3].cost;
upgradebutton5.innerHTML =
  availableItems[4].name + "cost: " + availableItems[4].cost;*/
/*let acounter: number = 0,
  bcounter: number = 0,
  ccounter: number = 0,
  dcounter: number = 0,
  ecounter: number = 0;*/
let counter: number = 0;

mydiv.innerHTML = counter + " lollipops";
displayedrate.innerHTML = upgraderate + " lollipops/sec";
button.addEventListener("click", function () {
  counter++;
});
for (let i = 0; i < availableItems.length; i++) {
  buttons[i].disabled = true;
  buttons[i].addEventListener("click", function () {
    counter = counter - availableItems[i].cost;
    upgraderate = upgraderate + availableItems[i].rate;
    counters[i]++;
    availableItems[i].cost = availableItems[i].cost * 1.15;
    buttons[i].innerHTML =
      availableItems[i].name + "cost: " + availableItems[i].cost;
  });
}

app.append(header);
app.append(button);
app.append(mydiv);
for (let i = 0; i < buttons.length; i++) {
  app.append(buttons[i]);
}
app.append(displayedrate);
app.append(upgradecount);
let time = 0;
function update(current: number) {
  mydiv.innerHTML = counter + " lollipops";
  displayedrate.innerHTML = upgraderate + " lollipops/sec";

  upgradecount.innerHTML = "You have purchased ";
  for (let z = 0; z < availableItems.length - 1; z++) {
    upgradecount.innerHTML +=
      counters[z] + " " + availableItems[z].name + " upgrades, ";
  }
  upgradecount.innerHTML +=
    "and " +
    counters[availableItems.length - 1] +
    " " +
    availableItems[availableItems.length - 1].name +
    " upgrades";
  counter = counter + ((current - time) / 1000) * upgraderate; //A loop is one frame.
  time = current;
  window.requestAnimationFrame(update);
  availableItems.forEach((item, i) => {
    buttons[i].disabled = item.cost > counter;
  });
}
window.requestAnimationFrame(update);
