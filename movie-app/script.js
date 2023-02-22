/*

- API get movie
https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1

*/

// DOM
const mainElement = document.getElementById("main");

const API_GET_MOVIES =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

// Fetching movie data

getMovies();

// Asynchronous programming
async function getMovies() {
  // Step 1: Goi API lay thong tin phim
  const res = await fetch(API_GET_MOVIES);
  const data = await res.json();

  // Step 2: Mang 1 chieu chua thong tin cac bo phim
  const { results } = data;

  // Step 3:
  for (let i = 0; i < results.length; i++) {
    const movie = results[i];
    console.log(`${i} - `, movie);
    // object destructuring
    const { original_title, overview, vote_average, poster_path } = movie;
    

    //   Tao 1 movie element
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    const movieEleContent = `
        <img
          src="https://image.tmdb.org/t/p/w1280${poster_path}"
          alt="Film thumbnail"
        />
        <div class="movie-info">
          <h3>${original_title}</h3>
          <span>${vote_average}</span>
        </div>
        <div class="movie-overview">
          <h3>Overview</h3>
          <p>${overview}</p>
        </div>
    `;

    movieElement.innerHTML = movieEleContent;
    
    mainElement.appendChild(movieElement);
  }

  // Render list movie data => movie element
}
