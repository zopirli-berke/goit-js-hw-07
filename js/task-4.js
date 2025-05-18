const loginForm = document.querySelector(`.login-form`);
const label = document.querySelectorAll(`label`);
const input = document.querySelectorAll(`input`);
const btn = document.querySelector(`button`);

loginForm.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = loginForm.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (emailValue === `` || passwordValue === ``) {
    alert(`All form fields must be filled in`);
    return;
  }
  const loginFormData = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(loginFormData);
  loginForm.reset();
}

// Style class add

loginForm.classList.add(`login-form-style`);

label.forEach((item) => {
  item.classList.add(`label`);
});

input.forEach((item) => {
  item.classList.add(`input`);
});

btn.classList.add(`button`);
