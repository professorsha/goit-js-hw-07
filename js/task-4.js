const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;
  if ((email) && (password)) {
    const info = {
      email: email.trim(),
      password: password.trim(),
    };
    console.log(info);
    event.currentTarget.reset();
  } else {
    alert("All form fields must be filled in");
  }
}
