// Datatypes

// Array: mảng
const car1 = "Honda";
const car2 = "Suzuki";
const car3 = "Yamaha";

// Mảng 1 chiều
/*
    - Mỗi phần từ của mảng sẽ bắt đầu từ 0
    - Trong mảng một chiều đối JS, thì các phần tử không nhất thiết cùng kiểu dữ liệu
    - Với một mảng có n phần tử: 
        + Chỉ số index bắt đầu: 0
        + Chỉ số index kết thúc: n-1
*/
const carBrands = ["Honda", "Suzuki", "Yamaha"];
console.log(carBrands[1]);
console.log(carBrands[2]);

// Lấy được độ dài của mảng (length/size)
const lengthOfCarBrands = carBrands.length;
console.log("Độ dài của mảng carBrands là:", lengthOfCarBrands);

// Cách lặp qua mảng đó như thế nào
// Duyệt mảng một chiều
for (let i = 0; i < lengthOfCarBrands; i++) {
  const car = carBrands[i];
  console.log(i, " : ", car);
}

let j = 0;
while (j < lengthOfCarBrands) {
  console.log(carBrands[j]);
  j += 1;
}

/*
    Bai 1
    const nums = [10,20, -5, 8 , 7, 6 , 3]
    Tinh tong cac so chan o trong mang nums, viết dưới dạng function:
        + input: nums
        + output: giá trị tổng
*/

// Bài 1
function findSumOfEvenNumbers(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    const num = nums[i];
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

const testCaseFindSum1 = findSumOfEvenNumbers([10, 20, -5, 8, 7, 6, 3]); // 44
const testCaseFindSum2 = findSumOfEvenNumbers([10, 0, 0, 0, 0, 0, -10]); // 0

console.log(testCaseFindSum1);
console.log(testCaseFindSum2);

// Bài 2
/*
    Bai 2
    Input: mảng 1 chiều các số nguyên 
    nums = [10, 20, -5, 8 , 7, 6 , 3]

    Output: số có giá trị lớn nhất
*/
function findMax(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

console.log(findMax([1, -1, 100, 20, 30, 8, -6, 5])); // 100
console.log(findMax([1, 1, 1, 1, 1, 1, 1, -1, -2, -3, 1])); // 1
console.log(findMax([-4, -5, -10, -6])); // -4

// Object (Đối tượng)

// Kiểu dữ liệu object
const student = {
  age: 16,
  gpa: 8.0,
  classId: "10A",
  gender: "male",
  hobbies: ["video-game", "soccer", "music", "badminton"],
  address: {
    postalCode: "23334",
    street: "Le Thanh Ton",
    ward: "12",
    district: {
      code: "bt",
      label: "Binh Thanh",
    },
  },
};
console.log(student.address.district.label);

console.log("Student's hobby is:", student.hobbies[3]);

const car = {
  brand: "BMW",
  publishedYear: "2020",
  mainColor: "blue",
  price: "100000",
};

// console.log(car.brand);
// console.log("Main color of car is:", car.mainColor);

// console.log(student.classId);
// console.log(student["classId"]);

// Dynamic key
const key = "classId";
console.log(student[key]);

// Duyệt object
// for...in
/*
const car = {
  brand: "BMW",
  publishedYear: "2020",
  mainColor: "blue",
};
*/
for (let key in car) {
  console.log("Key:", key);
  console.log("Value:", car[key]);
}

delete car.mainColor;
delete car.price;
delete car.brand;
delete car.publishedYear;

console.log("Car after deleting");
for (let key in car) {
  console.log("Key:", key);
  console.log("Value:", car[key]);
}

/*
    const employees = [
        { name: "John", age: 21, salary: 23000 },
        { name: "Steve",  age: 32, salary: 40000 },
        { name: "Martin",  age: 16, salary: 2700 }
    ]

    Input: employees
    Output: the total salary
*/
function getTotalSalary(employees) {
  let total = 0;
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    total += employee.salary;
  }

  return total;
}

console.log(
  getTotalSalary([
    { name: "John", age: 21, salary: 23000 },
    { name: "Steve", age: 32, salary: 40000 },
    { name: "Martin", age: 16, salary: 2700 },
  ])
);

/*
    Viết hàm nhận vào hai điểm, và trả về khoảng cách của 2 điểm
    Biết rằng: x (hoành độ), y(tung độ)

    point = {
        x: 3
        y: 5
    }
    Output: Khoảng cách của hai điểm
    A(3,1)
    B(10,4)

    => sqrt((10 - 3)^ 2 + (4 -1 ) ^ 2)

*/

// Naming function
function getDistance(pointA, pointB) {
  const distance = Math.sqrt(
    (pointB.x - pointA.x) ** 2 + (pointB.y - pointA.y) ** 2
  );

  return Math.round(distance);
}
console.log(getDistance({ x: -2, y: 1 }, { x: 4, y: 3 })); // ➞ 6.325

console.log(getDistance({ x: 0, y: 0 }, { x: 1, y: 1 })); // ➞ 1.414

console.log(getDistance({ x: 10, y: -5 }, { x: 8, y: 16 })); //➞ 21.095
