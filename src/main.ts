import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Chase's game";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
