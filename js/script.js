console.log("Giovedì");

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

  const griglia = document.querySelector(".container");
  for (let i = 1; i < 101; i++) {
    const quadrato = document.createElement("div");
    griglia.append(quadrato);
    quadrato.innerHTML = i;
    quadrato.style.textAlign = "center";
  }
}

console.log(i);
/*

*/
