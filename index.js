const students = [];
function Student(name, age, course){

    this.name = name;
    this.age = age;
    this.course = course;
    this.introduce = function(){
        return `Hi! My name is ${this.name} and I study ${this.course}.`;
    }

    this.courseDetails = function(){

        return `${this.name} is enrolled in ${this.course}.`;

    }
}

function addStudent(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    if(name === "" || age === "" || course === ""){
        alert("Please fill all fields");
        return;
    }

    const student = new Student(name, age, course);
    students.push(student);
    renderStudents();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}


function renderStudents(){
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = "";
    students.forEach((student, index) => {
        const div = document.createElement("div");
        div.classList.add("student-card");
        div.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Course:</strong> ${student.course}</p>
            <div class="actions">
                <button onclick="showIntroduction(${index})">
                    Introduce
                </button>
                <button onclick="showCourse(${index})">
                    Course Details
                </button>
            </div>
        `;
        studentList.appendChild(div);
    });
    updateDashboard();
}

function showIntroduction(index){
    const messageBox = document.getElementById("messageBox");
    messageBox.style.display = "block";
    messageBox.innerText = students[index].introduce();
}

function showCourse(index){
    const messageBox = document.getElementById("messageBox");
    messageBox.style.display = "block";
    messageBox.innerText = students[index].courseDetails();
}

function updateDashboard(){
    document.getElementById("studentCount").innerText =
    students.length;
    const uniqueCourses = [...new Set(
        students.map(student => student.course)

    )];

    document.getElementById("courseCount").innerText =
    uniqueCourses.length;
}

function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerText =
    `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

let seconds = 0;

setInterval(() => {
    seconds++;
    document.getElementById("timer").innerText =
    `${seconds}s`;
}, 1000);