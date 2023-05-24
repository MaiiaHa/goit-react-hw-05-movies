// import axios from 'axios';

//===== all
// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
//=====
export async function getTrendingMovies() {
  const KEY = '319d5522e2117aa6383989c80b35f4f5';

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer 319d5522e2117aa6383989c80b35f4f5',
    },
  };

  await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${KEY}`,
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
