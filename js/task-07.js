const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInput);

setTextFontSize();

function onInput() {
  setTextFontSize();
}

function setTextFontSize() {
  refs.text.style.fontSize = `${refs.input.value}px`;
}
