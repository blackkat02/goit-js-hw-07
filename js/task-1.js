const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
    const categoryTitle = item.querySelector("h2").textContent;
    console.log(`Category: ${categoryTitle}`);
    const elementsCount = item.querySelectorAll("li").length;
    console.log(`Elements: ${elementsCount}`);
});
