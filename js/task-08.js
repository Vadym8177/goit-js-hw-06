const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    if (!value) {
      alert('Все поля должны быть заполнены');
      return;
    }
    console.log({ name, value });
  });

  event.currentTarget.reset();
}
