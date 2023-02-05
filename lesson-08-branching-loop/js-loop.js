/*
    100 nhân viên

    Input
    - Lương cơ bản: a
    - Lương bonus:  b
    - Ngày nghỉ:    c
        + 
        + 

    Lương nhận đươc = 10.000.000 + 2.000.0000 - c * 100.000 (*)

    Vòng lặp => lặp qua 100 nhân viên => apply công thức (*) cho từng nhân viên => Lương nhận được
*/

// 1. Vòng lặp for
/*
    for (<statement_1>; <statement_2>; <statement_3>) {
	
    }

    - statement_1 => khởi tạo biến lặp
    - statement_2 => điều kiện dừng của vòng lặp
    - statement_3 => cập nhật lại giá trị của biến lặp
*/

// Tính tổng các số từ 1 đến 100
// 1 2 3 4 5 6... 99 100
// for...in
// for... each
// forEach
let sum = 0;
for (let i = 1; i <= 100; i++) {
  // sum = sum + i;
  sum += i;
  console.log("i=", i, " and sum = ", sum);
}

console.log("Tổng từ 1 đến 100 là:", sum);

//  Tính tổng bình phương của các số tự nhiên chẵn bé hơn 50
let sum_2 = 0;

// Cách 1
// for (let i = 0; i < 50; i++) {
//   if (i % 2 === 0) {
//     sum_2 += i ** 2; // i^2
//   }
// }

// Cách 2
for (let i = 0; i < 50; i += 2) {
  sum_2 += i ** 2;
}

console.log("Tổng bình phương của các số chẵn bé hơn 50 là:", sum_2);

// while
/*  
    const condition; // có giá trị kiểu dữ liệu boolean (true/false)
    while(condition){
        //logic code


    }
*/

// let sumFrom_1_to_100 = 0;
// let index = 1;
// while (index <= 100) {
//   sumFrom_1_to_100 += index;
//   index += 1;
// }
// Hàm tính tổng các số từ 1 cho đến n
function calculateSumFromToN(n) {
  let sum = 0;
  let index = 1;
  while (index <= n) {
    sum += index;
    index += 1;
  }

  console.log(
    "Tổng từ 1 đến 100 sử dụng vòng lặp while la:",
    calculateSumFromToN(100)
  );
}

// Bài toán 1: tính tổng các số của số tự nhiên n (n < 100000)
// n = 123 => sum = 1 + 2 + 3 = 6
// n = 10238 = sum 1 + 0 + 2 + 3 + 8 = 14
// 45 => sum = 4 + 5;
// Gợi ý: while , % , Math.floor(n / 10), cộng dồn +=
/*
    n = 123 
    sum = 0    
    temp: tách số ở hàng đơn vị ra= 3
    sum = sum + temp = 0 + 3
    n = Math.floor( n  / 10)
*/

// let inputExercise_1 = 11223301; // 1023 => 102 => 10 => 1 => 0
// let result_1 = 0;
// while (inputExercise_1 > 0) {
//   const temp = inputExercise_1 % 10;
//   result_1 += temp;
//   inputExercise_1 = Math.floor(inputExercise_1 / 10);
// }
// console.log(
//   `Kết quả bài 1: tổng các số của ${inputExercise_1} là: ${result_1}`
// );
// Chuyển đoạn code tính tổng các số thành function => tái sử dụng
function calculateSumOfDigits(num) {
  let result = 0;
  while (num > 0) {
    const temp = num % 10;
    result += temp;
    num = Math.floor(num / 10);
  }
  console.log("Tong la:", result);
}

console.log(calculateSumOfDigits(10238)); // 14
console.log(calculateSumOfDigits(11223301)); // 14
console.log(calculateSumOfDigits(45)); // 9

// Bài toán 2: tính tổng các ước nguyên dương của số tự nhiên n
/*
    - input số tự nhiên n
    - logic: tổng các ước:
        + ví dụ như số 6 => có các ước nguyên dương là: 1 , 2, 3 ,6
        +              10=> có các ước nguyên dương là: 1, 2, 5, 10
*/

// Bài toán 3: kiểm tra xem n có phải là số nguyên tố hay không
/*
    - Số nguyên tố là các số tự nhiên lớn hơn 1 mà có đúng hai ước là 1 và chính nó
    (Những số còn lại gọi là hợp số)
*/
