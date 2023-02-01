let num = 13;

let condition = num % 2 === 0;

// Câu lệnh if
if (true) {
  //   console.log("Đây là số chẵn");
}

// Câu lệnh if và else
let age = 18;

if (age >= 18) {
  console.log("Được phép chạy xe gắn máy");
} else {
  console.log("Không được phép");
}

//  Câu lệnh if elseif và else

/*
    Bài toán: 

    Xếp loại học lực của học sinh

    - Input: điểm trung bình của học sinh (point)

    - Logic:
        - Nếu point >= 8 và nhỏ hơn 10 => Giỏi
        - Nếu point >= 6.5 và point < 8 => Khá
        - Nếu point >= 5 và point < 6.5 => Trung bình
        - Nếu point < 5 => Yếu

    - Output: Học lực
*/
// BA: Business Analysyst
const point = 5.5;

if (point >= 8) {
  console.log("Học sinh GIỎI");
} else if (point >= 6.5) {
  console.log("Học sinh KHÁ");
} else if (point >= 5) {
  console.log("Học sinh TRUNG BÌNH");
} else {
  console.log("Ở lại lớp");
}

// if (point >= 8 && point <= 10) {
//   console.log("Học sinh GIỎI");
// }

// if (point >= 6.5 && point < 8) {
//   console.log("Học sinh KHÁ");
// }

// if (point >= 5 && point < 6.5) {
//   console.log("Học sinh TRUNG BÌNH");
// }

// if (point < 5) {
//   console.log("Ở LẠI LỚP :(( ");
// }

// Switch - case
/*
    - Input: tháng (month) thứ n
    - Logic:
        1,3,5,7,8,10,12: 31 ngày
        2: 28,29 ngày
        4,6,9,11: 30 ngày

        Năm nhuận tháng 2=> 29 ngày
        Năm không nhuận tháng 2 có 28 ngày
    - Output Tháng month thứ n có .... ngày
*/

const month = 2;
const year = 2400;

let result = "";

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    result = "31";
    break;
  case 2:
    if ((year % 4 === 0 && year % 100 !== 0) 
        || year % 400 === 0) {
      result = "29";
    } else {
      result = "28";
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    result = "30";
    break;
  default:
    result = 0;
}

console.log(`Tháng ${month} có ${result} ngày`);
