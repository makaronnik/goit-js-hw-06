const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (!checkTheFieldsAreFilled(this.elements)) {
    alertFieldsAreNotFilled();

    return;
  }

  console.log(composeFormValuesObject(this.elements));

  this.reset();
}

function checkTheFieldsAreFilled(elements) {
  return elements.email.value.length > 0 && elements.password.value.length > 0;
}

function alertFieldsAreNotFilled() {
  alert('Не всі поля заповнені! Заповніть будь ласка.');
}

function composeFormValuesObject(elements) {
  return {
    email: elements.email.value,
    password: elements.password.value,
  };
}
