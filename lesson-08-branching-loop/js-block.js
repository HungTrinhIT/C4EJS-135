//--------------------------//
//1. Block (khối lệnh)
//--------------------------//

// Sự khác biệt giữa var, let và const ?????

const greeting = "Hello MindX, I am a Software Engineer";
let x = 10;
console.log(greeting);

{
  const greeting = "Hôm nay là mùng 11 tết";
  console.log(greeting); // "Hôm nay là mùng 11 tết";
  {
    console.log("x=", x);
    const greeting = "Ngày mai là mùng 12 tết";
    let y = 5;
    console.log("y=", y);

    console.log(greeting); // "Ngày mai là mùng 12 tết";
  }
  console.log("y=", y);
  //   const a = 10;
  //   const b = 5;
  //   const sum = a + b;
  //   console.log(`${a} + ${b} = ${sum}`);
}

//Notes: khi khai báo biến với từ khoá let và const thì phạm vi hoạt động sẽ là block scope

console.log(greeting);

//--------------------------//
// 2. Các câu lệnh rẻ nhánh
//--------------------------//


