const form = document.getElementById("registrationForm");
const studentList = document.getElementById("studentList");

let students = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  clearErrors();

  let isValid = true;

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();

  const genderInput = document.querySelector('input[name="gender"]:checked');
  const gender = genderInput ? genderInput.value : "";

  const hobbies = [];
  document.querySelectorAll('.hobbies-group input[type="checkbox"]:checked')
    .forEach(hobby => hobbies.push(hobby.value));

  if(fullName === "") {
    showError("nameError", "Full Name is required");
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email === "") {
    showError("emailError", "Email is required");
    isValid = false;
  } else if(!email.match(emailPattern)) {
    showError("emailError", "Enter valid email");
    isValid = false;
  }

  if(password.length < 6) {
    showError("passwordError", "Password must be at least 6 characters");
    isValid = false;
  }

  if(confirmPassword !== password) {
    showError("confirmPasswordError", "Passwords do not match");
    isValid = false;
  }

  const phonePattern = /^[0-9]{11}$/;

  if(!phone.match(phonePattern)) {
    showError("phoneError", "Enter valid 11-digit phone number");
    isValid = false;
  }

  if(gender === "") {
    showError("genderError", "Select gender");
    isValid = false;
  }

  if(course === "") {
    showError("courseError", "Select a course");
    isValid = false;
  }

  if(hobbies.length === 0) {
    showError("hobbiesError", "Select at least one hobby");
    isValid = false;
  }

  if(message.length < 10) {
    showError("messageError", "Message should be at least 10 characters");
    isValid = false;
  }

  if(!isValid) return;

  const student = {
    fullName,
    email,
    phone,
    gender,
    course,
    hobbies,
    message
  };

  students.push(student);
  displayStudents();

  form.reset();
});

function showError(id, message) {
  document.getElementById(id).innerText = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");

  errors.forEach(error => {
    error.innerText = "";
  });
}

function displayStudents() {
  studentList.innerHTML = "";
  students.forEach((student, index) => {
    studentList.innerHTML += `
      <div class="student-card">
        <h3>Student ${index + 1}</h3>

        <p><strong>Name:</strong> ${student.fullName}</p>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>Phone:</strong> ${student.phone}</p>
        <p><strong>Gender:</strong> ${student.gender}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Hobbies:</strong> ${student.hobbies.join(", ")}</p>
        <p><strong>About:</strong> ${student.message}</p>
      </div>
    `;
  });
}