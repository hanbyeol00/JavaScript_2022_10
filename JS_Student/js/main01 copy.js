const inputs = document.querySelectorAll("input");
const tbody = document.querySelector("tbody");
const btn = document.querySelector("button");

let studentList = [];

const addStudent = () => {
  const student = {
    학번: inputs[0].value,
    이름: inputs[1].value,
    학과: inputs[2].value,
    학년: inputs[3].value,
    주소: inputs[4].value,
    전화번호: inputs[5].value,
  };
  studentList.push(student);
};

const printStudent = () => {
  if (!studentList) {
    return false;
  }
  tbody.textContent = "";
  for (let i = 0; i < scores.length; i++) {
    const studentList = studentList[i];
    const tr = document.createElement("TR");

    const studentValues = Object.values(studentList);
    studentValues.forEach((value) => {
      const td = document.createElement("TD");
      td.textContent = value;
      tr.appendChild(td);
    });
    tbodyScore.appendChild(tr);
  }
};

const saveStudent = () => {
  if (studentList) {
    localStorage.setItem("StudentInfo", JSON.stringify(studentList));
  }
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
