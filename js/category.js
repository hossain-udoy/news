// displaying category from api

// fetch('https://openapi.programming-hero.com/api/news/categories')
//     .then(res => res.json())
//     .then(data => displayCategory(data.data.news_category))
//     .catch(error => console.log(error));

// const displayCategory = Categories => {

//     const showAll = document.getElementById('show-categories');

//     Categories.forEach(category => {
//         console.log(category)
//         const categoryList = document.createElement('div');
//         categoryList.innerHTML = `<button type="button" onclick="loadNewsDetails(${category.category_id})" class="btn btn-light ">${category.category_name}</button>`;
//         showAll.appendChild(categoryList);
//     })


// }

fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
    .catch(error => console.log(error));

const displayCategory = Categories => {

    const showAll = document.getElementById('show-categories');

    Categories.forEach(category => {
        console.log(category)
        const categoryList = document.createElement('div');
        categoryList.innerHTML = `<button type="button" onclick="loadNewsDetails('${category.category_id}', '${category.category_name}')" class="btn btn-light ">${category.category_name}</button>`;
        showAll.appendChild(categoryList);
    })


}

