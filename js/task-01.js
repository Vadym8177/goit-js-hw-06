const navCatogories = document.querySelectorAll('.item');
console.log(`Number of categories:`, navCatogories.length);

const navTitle = document.querySelectorAll('h2');
const navElements = document.querySelectorAll('.item ul');


console.log(`Category:`, navTitle[0].textContent);
console.log(`Elements:`, navElements[0].children.length);

console.log(`Category:`, navTitle[1].textContent);
console.log(`Elements:`, navElements[1].children.length);

console.log(`Category:`, navTitle[2].textContent);
console.log(`Elements:`, navElements[2].children.length);
