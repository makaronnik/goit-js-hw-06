function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createButtonEl: document.querySelector('[data-create]'),
  destroyButtonEl: document.querySelector('[data-destroy]'),
  numberInputEl: document.querySelector('#controls input'),
  boxesDivEl: document.querySelector('#boxes'),
};
let divSideLength = 30;

refs.createButtonEl.addEventListener('click', onCreateButtonClick);
refs.destroyButtonEl.addEventListener('click', onDestroyButtonClick);

function onCreateButtonClick() {
  const numberOfDivElementsToCreate = refs.numberInputEl.value;

  createBoxes(numberOfDivElementsToCreate);
}

function onDestroyButtonClick() {
  destroyBoxes();
}

function createBoxes(number) {
  const divElements = createDivElements(number);

  refs.boxesDivEl.append(...divElements);
}

function destroyBoxes() {
  refs.boxesDivEl.innerHTML = '';
}

function createDivElements(number) {
  const divElements = [];

  for (let index = 0; index < number; index++) {
    const divElement = document.createElement('div');

    divElement.style.height = `${divSideLength}px`;
    divElement.style.width = `${divSideLength}px`;
    divElement.style.backgroundColor = getRandomHexColor();

    divElements.push(divElement);

    divSideLength += 10;
  }

  return divElements;
}
