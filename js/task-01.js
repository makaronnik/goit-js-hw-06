const listElement = document.querySelector('#categories');
const categoriesCollection = listElement.children;
const categoriesArray = Array.from(categoriesCollection);

console.log('Number of categories:', categoriesCollection.length);

categoriesArray.forEach(category => {
  console.log('');
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.childElementCount);
});
