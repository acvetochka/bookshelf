import axios from 'axios';

const per_page = 40;
let totalPages = 0;

async function getBooks() {
  //   const API_KEY = '35367804-7020ab364021c8257af086cad';
  //   const params = new URLSearchParams({
  //     key: API_KEY,
  //     q: query,
  //     image_type: 'photo',
  //     orientation: 'horizontal',
  //     safesearch: true,
  //     per_page: per_page,
  //     page: page,
  //   });

  const response = await axios.get(
    'https://books-backend.p.goit.global/books/top-books'
  );
  //   totalPages = response.data.totalHits / per_page;
  return response;
}

getBooks().then(resp => console.log(resp));
export { getGallery, totalPages };
