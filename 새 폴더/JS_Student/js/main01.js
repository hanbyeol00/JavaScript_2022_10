const inputs = document.querySelectorAll("input");
const tbody = document.querySelector("tbody");
const btn = document.querySelector("button");

let student = [];
let studentList = [];

const addStudent = () => {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i].value;
    student[i] = input;
  }
};

const printStudent = () => {
  const tr = document.createElement("TR");
  student.forEach((student) => {
    let td = document.createElement("TD");
    td.textContent = student;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
};

const saveStudent = () => {
  const studentData = {
    학번: inputs[0].value,
    이름: inputs[1].value,
    학과: inputs[2].value,
    학년: inputs[3].value,
    주소: inputs[4].value,
    전화번호: inputs[5].value,
  };
  studentList.push(studentData);

  localStorage.setItem("StudentInfo", JSON.stringify(studentList));
};

const loadStudent = () => {
  const studentData = localStorage.getItem("StudentInfo");

  studentList = JSON.parse(studentData);
  console.table(studentList);
  if (!studentList) {
    studentList = [];
    return false;
  }
  studentList.forEach((studentList) => {
    const tr = document.createElement("TR");
    let td = document.createElement("TD");
    td.textContent = studentList.학번;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList.이름;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList.학과;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList.학년;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList.주소;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.textContent = studentList.전화번호;
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
};
loadStudent();
const init = () => {
  addStudent();
  printStudent();
  saveStudent();
};
btn?.addEventListener("click", init);
