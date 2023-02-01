/*
    Viết chương trình nhập vào chỉ số điện cũ và chỉ số điện mới. 

    Tính tiền điện phải trả trong tháng. 

    Dữ liệu nhập phải được kiểm tra: chỉ số điện cũ ≤ chỉ số điện mới. 
    Cách thức tính tiền theo qui định sau:

    - 50 Kwh định mức đầu tiên có đơn giá là 1243 Đ/Kwh. 50 * 1243 + 1 * 1304
    - Các Kwh thứ 51 đến 100 có đơn giá là 1304 Đ/Kwh.  49 * 1304 (100 - 51 + 1)
    - Các Kwh thứ 101 đến 150 có đơn giá là 1644 Đ/Kwh. 50 * 1243 + 50 * 1304 + 24 * 1644
    - Các Kwh thứ 151 đến 200 có đơn giá là 1806 Đ/Kwh.
    - Các Kwh thứ 201 đến 250 có đơn giá là 1976 Đ/Kwh.
    - Các Kwh thứ 251 trở lên có đợn giá là 2297 Đ/Kwh. 

    Trong đó:
    - Input: chỉ số điện cũ **(oldIndex)**, chỉ số điện mới (**newIndex)**
    - Output: tiền điện phải trả

*/

// Input
let oldIndex = 123;
let newIndex = 247;
// total = 147

let total = newIndex - oldIndex; // 340 kwh
let result = 0;
//

if (newIndex < oldIndex) {
  console.log("Chỉ số điện không hợp lệ");
} else {
  if (total >= 251) {
    result = (total - 251 + 1) * 2297 + 50 * (1976 + 1806 + 1644 + 1304 + 1243);
  } else if (total >= 201) {
    result = (total - 201 + 1) * 1976 + 50 * (1806 + 1644 + 1304 + 1243);
  } else if (total >= 151) {
    result = (total - 151 + 1) * 1806 + 50 * (1644 + 1304 + 1243);
  } else if (total >= 101) {
    result = (total - 101 + 1) * 1644 + 50 * (1304 + 1243);
  } else if (total >= 51) {
    console.log("here")
    result = (total - 51 + 1) * 1304 + 50 * 1243;
  } else {
    result = total * 1243;
  }
}

console.log("Số tiền điện phải trả là:", result);
