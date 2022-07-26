const navCatogories = document.querySelectorAll('.item');
console.log(`Number of categories:`, navCatogories.length);


navCatogories.forEach(item => {
  const element = item.querySelectorAll('ul li');
  const title = item.querySelector('h2');
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${element.length}`);
});