console.log("Hello world");
console.log("Hello Viet Nam");
console.log("Viet Nam 2-2 Thai Lan");

// 3 từ khoá để khởi tạo biến trong Javascript
var num = 2;
var nUm = 3;

// 1. Chữ cái đầu tiên phải là: nằm trong bảng chữ cái hoặc $ hoặc _
// 2. case sensitive
// 3.
let product = "IPhone 14 pro max";
let $product = "IPhone 14 pro max";
let _product = "IPhone 14 pro max";
// let break = "Hello mindx";

// Khai báo biến không hợp lệ
// let 1product = "Samsung z-fold";

const PI = 3.14;
const isAuthenticated = false;
const users = null;
let employees; // undefined

console.log(employees);

product = "IPhone 100 Promax";
console.log("Tôi được công ty ABCD thưởng tết:", product);
console.log("Product có kiểu dữ liệu là:", typeof product);

// Không thể re-assign một biến được khai báo bằng const
// PI = 3.141;
console.log("Hằng số PI có giá trị là", PI);
console.log("PI có kiểu dữ liệu là:", typeof PI);

console.log(users);
console.log(typeof users);

// Kiểu dữ liệu (data type)
/* 
    4gb = 4 * 1024 * 1024 * 1024 * 8 = 34.359.738.368 (bit)
    1. Kiểu dữ liệu nguyên thuỷ (Primitive data type)
        - string: "hello", "hello mindx"
        - number: 1 , 3 , 3.1, 4/3 (int, float, double)
        - boolean: true or false
        - null
        - undefined
        
    2. Kiểu dữ liệu tham chiếu (Reference data type)
        - array
        - object
*/

// let num_2 = num_1 + 1;
// let num_2 = ++num_1; // cộng trước, gán sau

let num_1 = 10;
--num_1; //9
let num_2 = num_1++; // num_2 = 9, num_1 = 10
num_2--; //num_2 = 8 (num_2 = num_2 - 1) (num_2 -= 1)

console.log("num_1:", num_1); //
console.log("num_2:", num_2); //

let total = 100;
total *= 2;
// total = total + 1;
// console.log("total++ ", total++);
// console.log("++total ", ++total);
// console.log("total = total + 1 ", total + 1);
console.log("total *= 2 ", total); // 200

// scripting programming language
if (total === "200") {
  console.log("Co gia tri la 200 ===");
}

// scripting programming language
if (total == "200") {
  console.log("Co gia tri la 200 ==");
}

// Phép gán: =

// Toán tử toán học
/*
    +
    -
    *
    /
    %
    **
*/

// Toán tử so sánh => trả về kiểu dữ liệu là boolean
/*
    >
    <
    >=
    <=
    ==
    ===
*/
const a = 100;
const b = 88;
const resultBetweenAandB = a >= b;
console.log("resultBetweenAandB:", resultBetweenAandB);
console.log("type of resultBetweenAandB:", typeof resultBetweenAandB);

console.log(10 > 5); // true
console.log(10 >= 10); // true
console.log(10 < 8); // false

// Toán tử logic
const isLogin = true;
const newIsLogin = !isLogin;
console.log("isLogin:", isLogin);
console.log("newIsLogin:", newIsLogin);

isLogin === true && console.log("Chào mừng bạn đã đến hệ thống chúng tôi");
isLogin === false && console.log("Vui lòng đăng ký tk đi nha");

/*
    MD1: "Nếu trời mưa"
    MD2: "Tôi đi net"

    and logical: &&
    MD1 && MD2

    or logical: ||
    MD1 || MD2

    true && true => true
    true && false =>  false
    false && false => false
    false && true => false

    true || true => true
    true || false =>  true
    false || false => false
    false || true => true

    not logical: !

*/
