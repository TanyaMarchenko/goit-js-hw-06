const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(categoryItem => {
    const title = categoryItem.querySelector('h2').textContent;
    const elements = categoryItem.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});