/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generateExcuse() {
  let getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

  let randomExcuse = `${getRandomItem(who)} ${getRandomItem(
    action
  )} ${getRandomItem(what)} ${getRandomItem(when)}`;
  return randomExcuse;
}

window.onload = function() {
  let excuseElement = document.getElementById("excuse");
  let randomExcuse = generateExcuse(who, action, what, when);
  excuseElement.innerHTML = randomExcuse;
};
