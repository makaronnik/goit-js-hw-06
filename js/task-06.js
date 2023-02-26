const inputEl = document.querySelector('#validation-input');
const length = parseInt(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (this.value.length !== length) {
    this.classList.add('invalid');
    this.classList.remove('valid');
  } else {
    this.classList.add('valid');
    this.classList.remove('invalid');
  }
}
