import './js/team-items';
import './js/team-modal';
// import axios from 'axios';

// const listCategory = document.querySelector('.category__list');
// const bookSection = document.querySelector('.book-section');
// const sectionTitle = document.querySelector('.section__title');

// listCategory.addEventListener('click', onClickCategory);

// async function getTopBooks() {
//   const response = await axios.get(
//     'https://books-backend.p.goit.global/books/top-books'
//   );
//   return response.data;
// }

// async function getCategoryList() {
//   const response = await axios.get(
//     'https://books-backend.p.goit.global/books/category-list'
//   );
//   return response.data;
// }

// async function getCategory(category) {
//   const response = await axios.get(
//     `https://books-backend.p.goit.global/books/category?category=${category}`
//   );
//   return response.data;
// }

// // getTopBooks().then(resp => console.log(resp));
// // getCategoryList().then(resp => console.log(resp));

// async function onClickCategory(evt) {
//   evt.preventDefault();
//   bookSection.innerHTML = '';
//   if (!evt.target.classList.contains('category__link')) {
//     return;
//   }
//   //   console.log(evt.target.textContent);
//   //   const category = await getCategory(evt.target.textContent);
//   //   console.log(category);
//   //   //   sectionTitle.textContent = list_name;
//   //   createMarkupCategory(category);
//   //   //   console.log(list_name);

//   const categoryList = await getCategoryList();
//   console.log(evt.target.textContent);
//   console.log(categoryList);
//   categoryList.forEach(async ({ list_name }) => {
//     if (list_name === evt.target.textContent) {
//       const category = await getCategory(list_name);
//       console.log(category);
//       sectionTitle.textContent = list_name;
//       createMarkupCategory(category);
//       console.log(list_name);
//     }
//   });
// }

// function createMarkupCategory(category) {
//   const markup = category
//     .map(item => {
//       const { list_name, book_image, title, author } = item;
//       return `
//     <li>
//     <img src="${book_image}" alt="${title}">
//     <h2>${title}</h2>
//     <p>${author}</p>
//     </li>`;
//     })
//     .join('');
//   bookSection.insertAdjacentHTML('beforeend', markup);
// }

// async function getMarkupCategoryList() {
//   const categoryList = await getCategoryList();
//   const categoryArr = [];
//   for (const { list_name } of categoryList) {
//     categoryArr.push(list_name);
//   }
//   console.log(categoryArr);
//   const markup = categoryArr
//     .map(
//       item =>
//         `<li class="category__item"><a href="" class="category__link">${item}</a></li>`
//     )
//     .join('');
//   listCategory.insertAdjacentHTML('beforeend', markup);
// }

// getMarkupCategoryList();
