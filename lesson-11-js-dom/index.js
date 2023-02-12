// DOM manipulation

// Tìm kiếm một node ở trong DOM Tree
// 1. Cách 1: thông qua ID
const titleEle = document.getElementById("section-title");
console.log(titleEle);
titleEle.innerHTML = "Lesson 12: Bootstrap";

// 2. Cách 2: thông qua className
const todosEle = document.getElementsByClassName("todos");
const todosItem = document.getElementsByClassName("todo-item");
console.log(todosEle);
console.log(todosItem);

// 3. Cách 3: thông qua tag name
const productsByTagName = document.getElementsByTagName("div");
console.log("products by getElementsByTagName:", productsByTagName);

// 4.Dựa vào selectors
const bphoneEle = document.querySelector(
  "#list-product .product-item:nth-child(4)"
);
console.log("BPhone element", bphoneEle.textContent);

// Bước 1: DOM product-item => mảng Nodelist
// Bước 2: Vòng lặp => duyệt mảng nodelist
// Bước 3: thay đổi text bên trong
// requirement
// function => class => module => service (level 3)
function renderNewProductsUI() {
  const products = document.querySelectorAll("#list-product .product-item");
  const parentProducts = document.getElementById("list-product");

  for (let i = 0; i < products.length; i++) {
    const productItem = products[i];
    const currentContent = productItem.textContent;

    productItem.style.marginBottom = "24px";

    // ES6: string literals

    const type = productItem.id;

    switch (type) {
      case "ip": {
        const newText = `Thế giới di động ${currentContent}`;
        productItem.innerHTML = newText;
        break;
      }

      case "sa": {
        const newText = `Cellphone S: ${currentContent}`;
        productItem.innerHTML = newText;
        break;
      }

      case "hu": {
        const newText = `KimLong center: ${currentContent}`;
        productItem.innerHTML = newText;
        break;
      }

      case "bp": {
        const newText = `Bkav: ${currentContent}`;
        productItem.innerHTML = newText;
        break;
      }

      case "vs": {
        const newText = `Vin Group: ${currentContent}`;
        productItem.innerHTML = newText;
        productItem.style.color = "red";
        break;
      }
    }
  }

  //  Thêm thẻ p chỉ số lượng điện thoại
  const totalPhone = products.length;
  const pElement = document.createElement("p");
  pElement.innerHTML = `Tổng số lượng điện thoại ${totalPhone}`;
  parentProducts.appendChild(pElement);
}
function logger() {
  console.log("Render successfully");
}

function updateUI() {
  renderNewProductsUI();
  logger();
}

// DOM
function calcSum(a, b) {
  return a + b;
}

const btnCalcSum = document.querySelector("#btn-calc-sum-2-numbers");

btnCalcSum.addEventListener("click", function () {
  const num1 = document.querySelector(".number-1").textContent;
  const num2 = document.querySelector(".number-2").textContent;
  const result = document.querySelector("#result");

  const sum = calcSum(+num1, +num2);
  result.innerHTML = `${num1} + ${num2} = ${sum}`;
});
