const loginForm = document.querySelector(`.login-form`);

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
