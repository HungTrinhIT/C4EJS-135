function printTime() {
  const clock = document.getElementById("clock");

  // Step 1: Khởi tạo đối tượng Date
  const now = new Date();

  //   Step 2: Lấy thông tin giờ, phút, giây hiện tại
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  //   Step 3: Định dạng kiểu muốn in ra màn hình
  const currentTime = `${hours}:${minutes}:${seconds}`;

  clock.innerText = currentTime;
}

printTime();

setInterval(printTime, 1000);

// Coding convention
// naming convention
const listStudents = [];
const list_students = [];
