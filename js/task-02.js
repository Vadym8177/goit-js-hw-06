const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ref = document.querySelector('#ingredients');
const makeElList = elements => {
  return elements.map(element => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = element;

    return itemEl;
  });
};

const items = makeElList(ingredients);
ref.append(...items);
