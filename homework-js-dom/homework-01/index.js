// Cách 1
// const image = document.querySelector(".bulboff-container img");

// function turnOff() {
//   image.src = "./images/pic_bulboff.gif";
// }

// function turnOn() {
//   image.src = "./images/pic_bulbon.gif";
// }

// Cách 2
function toggleBubble(status) {
  const image = document.querySelector(".bulboff-container img");
  switch (status) {
    case "off":
      image.src = "./images/pic_bulboff.gif";
      return;
    case "on":
      image.src = "./images/pic_bulbon.gif";
      return;
    default:
      return;
  }
}
