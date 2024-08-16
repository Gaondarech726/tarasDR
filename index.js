let btn = document.querySelector(".press");
let taras = document.querySelector(".taras");
let imgTaras = taras.querySelector(".img");
let textTaras = taras.querySelector("p");
let arrow = document.querySelector(".arrow");
let arrowLeft = document.querySelector(".arrow__left");

btn.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    taras.style.animation = "an 2s linear forwards";

    taras.addEventListener(
      "animationend",
      () => {
        taras.style.animation = "";
        clearInterval(intervalId);

        taras.style.left = "0px";
      },
      { once: true }
    );
  }, 300);
  setInterval(() => {
    if (
      getComputedStyle(imgTaras, null).getPropertyValue("background-image") ==
      `url("https://gaondarech726.github.io/tarasDR/Taras.jpg")`
    ) {
      imgTaras.style.backgroundImage = `url("./Taras2.jpg")`;
    } else if (
      getComputedStyle(imgTaras, null).getPropertyValue("background-image") ==
      `url("https://gaondarech726.github.io/tarasDR/Taras2.jpg")`
    ) {
      imgTaras.style.backgroundImage = `url("./Taras.jpg")`;
    }
  }, 250);
});

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
