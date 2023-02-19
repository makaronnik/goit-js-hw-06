const DEFAULT_NAME = 'Anonymous';
const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', inputNameHandler);

function inputNameHandler(event) {
  let inputValue = event.currentTarget.value;

  if (inputValue.length) {
    updateOutput(inputValue);
  } else {
    updateOutput(DEFAULT_NAME);
  }
}

function updateOutput(value) {
  refs.nameOutput.textContent = value;
}
