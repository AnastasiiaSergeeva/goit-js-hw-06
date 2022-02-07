const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
const productRef = document.querySelector("#ingredients");
const makeProdList = (ingredient) => {
  const productItem = document.createElement(`li`);
  productItem.textContent = ingredient;
  productItem.classList.add('item');

  return productItem;
}
const elements = ingredients.map(makeProdList);
productRef.append(...elements);

console.log(elements);
console.log(productRef);