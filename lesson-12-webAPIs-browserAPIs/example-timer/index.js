// setTimeout
// setInterval

function hello() {
  console.log("Hello world");
}
// 1s = 1000ms
// setTimeout(function () {
//   hello();
// }, 5000);

setInterval(function () {
  hello();
}, 2000);
