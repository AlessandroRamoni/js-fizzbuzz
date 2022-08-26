console.log("Giovedì");

const griglia = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  const quadrato = document.createElement("div");
  quadrato.style.textAlign = "center";
  griglia.append(quadrato);
  if (i % 3 === 0 && i % 5 === 0) {
    quadrato.innerHTML = "BuzzFuzz";
    // quadrato.style.backgroundColor = "#0cd6a1";
    quadrato.classList.add("backgreen");
    console.log("BuffFuzz");
  } else if (i % 3 === 0) {
    quadrato.innerHTML = "fizz";
    // quadrato.style.backgroundColor = "#ffd166";
    quadrato.classList.add("backpink");
    console.log("fizz");
  } else if (i % 5 === 0) {
    quadrato.innerHTML = "buzzzz";
    // quadrato.style.backgroundColor = "#f0466f";
    quadrato.classList.add("backblue");
    console.log("buzz");
  } else {
    quadrato.innerHTML = i;
    // quadrato.style.backgroundColor = "#1389b2";
    quadrato.classList.add("backyellow");
  }

  console.log(i);

  quadrato.addEventListener("mouseenter", function () {
    quadrato.style.backgroundColor = "red";
  });

  quadrato.addEventListener("mouseleave", function () {
    quadrato.style.backgroundColor = "initial";
  });
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
