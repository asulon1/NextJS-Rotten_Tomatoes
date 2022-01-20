const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
  },
  fetchActionsMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=28`,
  },
  fetchAventureMovies: {
    title: "Aventure",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=12`,
  },
  fetchAnimationMovies: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=16`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=35`,
  },
  fetchCrimeMovies: {
    title: "Crime",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=80`,
  },
  fetchDocumentaryMovies: {
    title: "Documentary",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=99`,
  },
  fetchDramaMovies: {
    title: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=18`,
  },
  fetchFamilyMovies: {
    title: "Family",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10751`,
  },
  fetchFantasyMovies: {
    title: "Fantasy",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=14`,
  },
  fetchHistoryMovies: {
    title: "History",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=36`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=27`,
  },
  fetchMusicMovies: {
    title: "Music",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10402`,
  },
  fetchMystery: {
    title: "Mystery ",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=9648`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10749`,
  },
  fetchScifiMovies: {
    title: "Sci Fi",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=878`,
  },
  fetchTVMovies: {
    title: "TV",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=53`,
  },
  fetchThrillerMovies: {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=53`,
  },
  fetchWarMovies: {
    title: "War",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10752`,
  },
  fetchWesternMovies: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=37`,
  },
};
