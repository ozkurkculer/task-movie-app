const URL = "https://api.themoviedb.org/";
const API_KEY = process.env.NEXT_PUBLIC_API;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
};

const getMovieDetail = async (movieID) => {
  const url = URL + `3/movie/${movieID}?language=en-US`;
  const res = await fetch(url, options)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.error("error:" + err));

  return res;
};

const getMovieReviews = async (movieID) => {
  const url = URL + `3/movie/${movieID}/reviews?language=en-US&page=1`;

  const res = await fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      return res.results;
    })
    .catch((err) => console.error("error:" + err));

  return res;
};

const getMovieCredits = async (movieID) => {
  const url = URL + `3/movie/${movieID}/credits?language=en-US`;

  const res = await fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.error("error:" + err));

  return res;
};

const DetailService = {
  getMovieDetail,
  getMovieReviews,
  getMovieCredits,
};

export default DetailService;
