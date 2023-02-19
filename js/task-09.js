function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorSpanEl: document.querySelector('.color'),
  changeColorButtonEl: document.querySelector('.change-color'),
};

refs.changeColorButtonEl.addEventListener('click', onChangeColorButtonClick);

function onChangeColorButtonClick() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  refs.colorSpanEl.textContent = randomColor;
}
