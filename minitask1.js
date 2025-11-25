const form = document.querySelector("form");
const fahrenheit = document.querySelector(".fahrenheit");
const reamur = document.querySelector(".reamur");
const kelvin = document.querySelector(".kelvin");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //
  let answer = e.target.celcius.value;
  //
  window.setTimeout(() => {
    celToFahren(answer);
  }, 1000);
  //
  window.setTimeout(() => {
    celToReamur(answer);
  }, 1000);
  //
  window.setTimeout(() => {
    celToKelvin(answer);
  }, 1000);
});

const celToFahren = (c) => {
  let parse1 = parseInt(c);
  let fahren = (4 / 5) * parse1;
  let parse2 = parseFloat(fahren);
  fahrenheit.textContent = parse2 + "°" + "fahrenheit";
};

//
const celToReamur = (c) => {
  let ream = (9 / 5) * c + 32;
  reamur.textContent = ream + "°" + "reamur";
};
//
const celToKelvin = (c) => {
  let kelv = c + 273;
  kelvin.innerText = kelv + "°" + "kelvin";
};
