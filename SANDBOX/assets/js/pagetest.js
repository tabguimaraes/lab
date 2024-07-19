console.log("ok");

let color = document.querySelector("#color");

color.addEventListener("input", function () {
  let body = document.querySelector("body");
  body.style.background = color.value;
});
