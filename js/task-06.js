const inputEl = document.querySelector('#validation-input');
const maxLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (this.value.length > maxLength) {
    this.classList.add('invalid');
    this.classList.remove('valid');
  } else {
    this.classList.add('valid');
    this.classList.remove('invalid');
  }
}
