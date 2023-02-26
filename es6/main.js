// const btn = document.querySelector("#btn");
const btn = document.getElementById("btn");

function alertMessage() {
  console.log("Click me runs");
  alert("Hello MindX");
}

btn.addEventListener("click", alertMessage);

const result = sum(10, 15);
console.log("Tong 2 so la:", result);

// Naming function
function sum(a, b) {
  return a + b;
}

// Arrow function
// const arrowFunctionSum = (a, b) => {
//   return a + b;
// };

const arrowFunctionSum = (a, b) => a + b;
const normalizeString = (str) => {
  return str.trim().toUpperCase();
};

console.log("arrowFunctionSum:", arrowFunctionSum(10, 2));
console.log("arrowFunctionSum:", arrowFunctionSum(8, 7));

const removeUselessSpaceFromString = (str) => {
  // Convert về mảng một chiều
  const words = str.trim().split(" ");
  const validWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    const isValidWord = Boolean(word); // true/false

    if (isValidWord) {
      validWords.push(word);
    }
  }

  const validStr = validWords.join(" ");
  return validStr;
};

const testCase1 = "          Hello";
const testCase2 = "Hello    ";
const testCase3 = "       Hello  World 123      321   ";
const testCase4 = "Valid string";

console.log("Test case 1:", testCase1);
console.log("Test case 1 clean:", removeUselessSpaceFromString(testCase1));
console.log("\n------------------\n");

console.log("Test case 2:", testCase2);
console.log("Test case 2 clean:", removeUselessSpaceFromString(testCase2));
console.log("\n------------------\n");

console.log(`Test case 3 ${testCase3}`);
console.log(`Test case 3 clean: ${removeUselessSpaceFromString(testCase3)}`);
console.log("\n------------------\n");

console.log("Test case 4:", testCase4);
console.log("Test case 4 clean:", removeUselessSpaceFromString(testCase4));
console.log("\n------------------\n");

// Array manipulation

/*
    - Thêm mới phần từ vào mảng
    - Xoá một phần tử khỏi mảng
    - Thay thế một phần tử thành một phần tử khác tại vị trí i
    - Sắp xếp mảng một chiều tăng dần
    - Sắp xếp mảng một chiều giảm dần
*/

// Spread operator => ...
