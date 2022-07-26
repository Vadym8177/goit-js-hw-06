const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email !== '' && password !== '') {
    const FormData = { email, password };
    event.currentTarget.reset();
    console.log(FormData);
  } else {
    alert('Все поля должны быть заполнены');
  }
}
