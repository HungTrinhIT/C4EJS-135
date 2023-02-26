const mockStudents = [
  {
    id: "131231",
    name: "Nguyễn Văn A",
    email: "a@gmail.com",
    dateOfBirth: "01/01/2000",
    course: "Code for everyone",
    math: 8,
    physics: 7,
    chemistry: 9,
  },
  {
    id: "114512",
    name: "Cristian Ronaldo",
    email: "ronaldo@gmail.com",
    dateOfBirth: "01/01/2000",
    course: "Data science",
    math: 10,
    physics: 10,
    chemistry: 9,
  },
  {
    id: "12351",
    name: "Harry Trinh",
    email: "a@gmail.com",
    dateOfBirth: "01/01/2000",
    course: "Code intensive",
    math: 6,
    physics: 5,
    chemistry: 4,
  },
  {
    id: "125151",
    name: "Alex Trinh",
    email: "a@gmail.com",
    dateOfBirth: "01/01/2000",
    course: "Blockchain Developer",
    math: 5,
    physics: 6,
    chemistry: 4,
  },
  {
    id: "13541",
    name: "Robin Van Persie",
    email: "a@gmail.com",
    dateOfBirth: "01/01/1980",
    course: "Web fullstack",
    math: 8,
    physics: 7,
    chemistry: 6,
  },
  {
    id: "24314",
    name: "Phil Jones",
    email: "a@gmail.com",
    dateOfBirth: "01/01/1995",
    course: "Web fullstack",
    math: 8,
    physics: 7,
    chemistry: 6,
  },
  {
    id: "15153",
    name: "Adam Lallana",
    email: "a@gmail.com",
    dateOfBirth: "01/01/2001",
    course: "Code for everyone",
    math: 10,
    physics: 3,
    chemistry: 2,
  },
  {
    id: "15153",
    name: "Lewan Kewin",
    email: "a@gmail.com",
    dateOfBirth: "01/01/1997",
    course: "Web fullstack",
    math: 8,
    physics: 8,
    chemistry: 5,
  },
];

// B1: DOM
let idEle = getElement("#txtMaSV");
let nameEle = getElement("#txtTenSV");
let emailEle = getElement("#txtEmail");
let dateOfBirthEle = getElement("#txtNgaySinh");
let courseEle = getElement("#khSV");
let mathEle = getElement("#txtDiemToan");
let physicsEle = getElement("#txtDiemLy");
let chemistryEle = getElement("#txtDiemHoa");

let tableBodyEle = getElement("#tbodySinhVien");
let errorMessage = getElement("#errorMessage");

// Tạo mảng chứa danh sách sinh viên
const studentList = [];

function initApp() {
  for (let student of mockStudents) {
    const studentObj = new Student(
      student.id,
      student.name,
      student.email,
      student.dateOfBirth,
      student.course,
      student.math,
      student.physics,
      student.chemistry
    );

    studentList.push(studentObj);
  }

  renderTable(studentList);
}

// Make sure the app is loaded before running the code
window.addEventListener("load", initApp);

// Hàm thêm sinh viên
function createStudent() {
  errorMessage.innerHTML = "";

  const isFormValid =
    !!idEle.value &&
    !!nameEle.value &&
    !!emailEle.value &&
    !!dateOfBirthEle.value &&
    !!courseEle.value &&
    !!mathEle.value &&
    !!physicsEle.value &&
    !!chemistryEle.value;

  // B1: Khởi tạo object student
  if (!isFormValid) {
    errorMessage.innerHTML = "Vui lòng nhập đầy đủ thông tin";
    return;
  }

  const student = new Student(
    idEle.value,
    nameEle.value,
    emailEle.value,
    dateOfBirthEle.value,
    courseEle.value,
    mathEle.value,
    physicsEle.value,
    chemistryEle.value
  );

  // B3: Thêm object student vào mảng studentList
  studentList.push(student);

  // B4: Gọi hàm renderTable để hiển thị danh sách studentList ra table
  renderTable(studentList);

  // B5: Reset form to the initial state
  resetForm();
}

// Hàm hiển thị danh sách sinh viên ra table
function renderTable(studentList) {
  let html = "";
  for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i];

    html += `
        <tr class="py-3">
          <td>${student.id}</td>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.dateOfBirth}</td>
          <td>${student.course}</td>
          <td>${student.calcScore()}</td>
        </tr>
      `;
  }

  tableBodyEle.innerHTML = html;
}

function resetForm() {
  idEle.value = "";
  nameEle.value = "";
  emailEle.value = "";
  dateOfBirthEle.value = "";
  courseEle.value = "";
  mathEle.value = "";
  physicsEle.value = "";
  chemistryEle.value = "";
}

function getElement(selector) {
  return document.querySelector(selector);
}

function onFilterStudent(event) {
  const filterType = event.target.value;

  switch (filterType) {
    case "scoreAsc": {
      const sortedStudentList = studentList.sort((a, b) => {
        return a.calcScore() - b.calcScore();
      });

      renderTable(sortedStudentList);
      break;
    }
    case "scoreDsc": {
      const sortedStudentList = studentList.sort((a, b) => {
        return b.calcScore() - a.calcScore();
      });

      renderTable(sortedStudentList);
      break;
    }
    case "alphabetAZ": {
      const sortedStudentList = studentList.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      renderTable(sortedStudentList);
      break;
    }
    case "alphabetZA": {
      const sortedStudentList = studentList.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });

      renderTable(sortedStudentList);
      break;
    }
    default:
      break;
  }
}

function onSearchStudent(event) {
  const value = event.target.value;

  if (value === "") {
    renderTable(studentList);
    return;
  }

  const filteredStudentList = studentList.filter((student) => {
    return student.name.toLowerCase().includes(value.toLowerCase());
  });

  renderTable(filteredStudentList);
}
