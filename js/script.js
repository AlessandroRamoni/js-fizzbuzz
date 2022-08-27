console.log("Giovedì");

const griglia = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  const quadrato = document.createElement("div");
  quadrato.style.textAlign = "center";
  griglia.append(quadrato);
  if (i % 3 === 0 && i % 5 === 0) {
    quadrato.innerHTML = "BuzzFuzz";

    quadrato.classList.add("backgreen");
    console.log("BuffFuzz");
  } else if (i % 3 === 0) {
    quadrato.innerHTML = "fizz";

    quadrato.classList.add("backpink");
    console.log("fizz");
  } else if (i % 5 === 0) {
    quadrato.innerHTML = "buzzzz";

    quadrato.classList.add("backblue");
    console.log("buzz");
  } else {
    quadrato.innerHTML = i;

    quadrato.classList.add("backyellow");
  }
  console.log(i);

  quadrato.addEventListener("click", function () {
    // quadrato.classList.add("backred");
    quadrato.style.backgroundColor = "red";
  });

  quadrato.addEventListener("dblclick", function () {
    // quadrato.classList.remove("backred");
    quadrato.style.backgroundColor = "white";
  });

  /*
    non riesco a far andare riga 32 e 37...
  */
}

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
