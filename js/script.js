console.log("Giovedì");

/*
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("BuffFuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
*/

const griglia = document.querySelector(".container");
const quadrato = document.createElement("div");

griglia.append(quadrato);
quadrato.style.textAlign = "center";
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    quadrato.innerHTML = "BuzzFuzz";
    console.log("BuffFuzz");
  } else if (i % 3 === 0) {
    quadrato.innerHTML = "fizz";
    console.log("fizz");
  } else if (i % 5 === 0) {
    quadrato.innerHTML = "buzzzz";
    console.log("buzz");
  } else {
    quadrato.innerHTML = i;
  }
  console.log(i);
}
