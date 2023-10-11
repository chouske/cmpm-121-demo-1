import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Chase's game";

document.title = gameName;
const button = document.createElement("button");
const header = document.createElement("h1");
header.innerHTML = gameName;
button.innerHTML = "🍭";
app.append(header);
app.append(button);
