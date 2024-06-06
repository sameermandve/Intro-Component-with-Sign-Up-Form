// All inputs selection
const form = document.querySelector("#form");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");

// All error-img and error-msg selection
const firstNameError = document.querySelector(".fname-error");
const lastNameError = document.querySelector(".lname-error");
const emailError = document.querySelector(".email-error");
const passError = document.querySelector(".pass-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element1, element2, message) => {
  const inputControl = element1;
  const errorDisplay = element2;
  const errorMsg = element2.nextElementSibling;

  inputControl.style.borderColor = "red";
  errorDisplay.style.display = "block";
  errorMsg.style.display = "block";
  errorMsg.innerText = message;
};

const setSuccess = (element1, element2) => {
  const inputControl = element1;
  const errorDisplay = element2;
  const errorMsg = element2.nextElementSibling;

  inputControl.style.borderColor = "green";
  errorDisplay.style.display = "none";
  errorMsg.style.display = "none";
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passValue = pass.value.trim();

  if (firstNameValue === "") {
    setError(firstName, firstNameError, "First Name cannot be empty");
  } else {
    setSuccess(firstName, firstNameError);
  }

  if (lastNameValue === "") {
    setError(lastName, lastNameError, "Last Name cannot be empty");
  } else {
    setSuccess(lastName, lastNameError);
  }

  if (emailValue === "") {
    setError(email, emailError, "Email cannot be empty");
    email.placeholder = "email@example.com";
  } else if (!isValidEmail(emailValue)) {
    setError(email, emailError, "Looks like this is not an email");
    email.placeholder = "email@example.com";
  } else {
    setSuccess(email, emailError);
  }

  if (passValue === "") {
    setError(pass, passError, "Password cannot be empty");
  } else if (passValue.length < 8) {
    setError(pass, passError, "Password must contain 8 or more characters");
  } else {
    setSuccess(pass, passError);
  }
};
