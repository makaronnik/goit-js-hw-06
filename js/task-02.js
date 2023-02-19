const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listElement = document.querySelector('#ingredients');

const createdElements = ingredients.map(title => {
  const listItem = document.createElement('li');

  listItem.textContent = title;
  listItem.classList.add('item');

  return listItem;
});

listElement.append(...createdElements);
