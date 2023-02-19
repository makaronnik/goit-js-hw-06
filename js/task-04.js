const refs = {
  incrementButton: document.querySelector('[data-action="increment"]'),
  decrementButton: document.querySelector('[data-action="decrement"]'),
  valueSpan: document.querySelector('#value'),
};

let counterValue = 0;

refs.incrementButton.addEventListener('click', () => {
  counterValue++;
  updateValueSpan();
});

refs.decrementButton.addEventListener('click', () => {
  counterValue--;
  updateValueSpan();
});

function updateValueSpan() {
  refs.valueSpan.textContent = counterValue;
}
